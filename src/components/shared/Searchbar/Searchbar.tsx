import styles from "./Searchbar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export const Searchbar: React.FC<SearchBarProps> = ({
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <input
      type="search"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className={`${styles.input} ${className ?? ""}`}
    />
  );
};
