import { useState, useRef, useEffect } from "react";

export default function CurrencyDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const dropdownRef = useRef(null);

  const currencies = [
    { code: "usd", name: "USD" },
    { code: "bdt", name: "BDT" },
    { code: "eur", name: "EUR" },
    { code: "gbp", name: "GBP" },
    { code: "jpy", name: "JPY" },
  ];

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button */}
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-between w-full text-sm font-medium text-gray-600 "
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {selectedCurrency}
          <svg
            className={`w-5 h-5 ml-2 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="language-menu"
        >
          <div className="py-1">
            {currencies.map((currency) => (
              <button
                key={currency.code}
                className={`block w-full px-4 py-2 text-sm text-left ${
                  selectedCurrency === currency.name
                    ? "bg-gray-100 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
                role="menuitem"
                onClick={() => {
                  setSelectedCurrency(currency.name);
                  setIsOpen(false);
                }}
              >
                {currency.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
