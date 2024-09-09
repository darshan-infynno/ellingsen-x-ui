import React, { FC, useEffect, useRef, useState } from "react";
import { getCountries, getCountryCallingCode } from "react-phone-number-input";
import ReactCountryFlag from "react-country-flag";
import en from "react-phone-number-input/locale/en.json";
import { cn, CountryCode } from "../../lib/utils";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Input } from "./input";

interface PhoneNumberInputProps {
  InputProps?: React.ComponentProps<typeof Input>; // Accept Input props
  onCountryChange?: (countryCode: CountryCode) => void; // Callback for country change
  containerClassName?: string; // Additional class for styling
  placeholder?: string; // Placeholder for the Input
  disabled?: boolean; // Disable the input if needed
  countrySelectorClassName?: string;
  flagClassName?: string;
  flagIconClassName?: string;
  countryCodeClassName?: string;
  dropdownClassName?: string;
  dropdownMenuClassName?: string;
  MenuflagIconClassName?: string;
}

const PhoneNumberInput: FC<PhoneNumberInputProps> = ({
  InputProps,
  onCountryChange,
  containerClassName,
  placeholder,
  disabled = false,
  countrySelectorClassName,
  flagClassName,
  flagIconClassName,
  countryCodeClassName,
  dropdownClassName,
  dropdownMenuClassName,
  MenuflagIconClassName,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  const [country, setCountry] = useState<CountryCode | undefined>("NG");

  const handleCountryChange = (countryCode: CountryCode) => {
    setCountry(countryCode);
    setIsOpen(false);
    if (onCountryChange) {
      onCountryChange(countryCode); // Call the external onCountryChange if provided
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={cn(`flex relative`, containerClassName)}>
      <div
        className={cn(
          "bg-black cursor-pointer py-4 pl-5",
          disabled && "bg-gradient-error",
          countrySelectorClassName
        )}
      >
        <div onClick={handleClick}>
          {country ? (
            <div className="flex items-center">
              <div
                className={cn(
                  "w-6 h-6 rounded-full overflow-hidden flex items-center justify-center mr-2 border border-gray-300",
                  flagClassName
                )}
              >
                <ReactCountryFlag
                  className={cn(
                    "!h-8 !w-8 !max-w-8 rounded-full",
                    flagIconClassName
                  )}
                  countryCode={country}
                  svg
                />
              </div>
              <span
                className={cn("text-base text-white", countryCodeClassName)}
              >
                +{getCountryCallingCode(country)}
              </span>
              <RiArrowDropDownLine className="text-white" size={28} />
            </div>
          ) : (
            en["ZZ"] || "Select Country"
          )}
        </div>
        {isOpen && (
          <div
            className={cn(
              "h-[500px] overflow-y-scroll border absolute top-20 bg-white z-[999]",
              dropdownClassName
            )}
          >
            {getCountries().map((countryCode) => (
              <div
                key={countryCode}
                className={cn(
                  "flex items-center p-2 cursor-pointer",
                  dropdownMenuClassName
                )}
                onClick={() => handleCountryChange(countryCode)}
              >
                <ReactCountryFlag
                  className={cn("h-6 w-6 mr-2", MenuflagIconClassName)}
                  countryCode={countryCode}
                  svg
                />
                {en[countryCode]} +{getCountryCallingCode(countryCode)}
              </div>
            ))}
          </div>
        )}
      </div>

      <Input {...InputProps} placeholder={placeholder} type={"number"} />
    </div>
  );
};

export { PhoneNumberInput };
