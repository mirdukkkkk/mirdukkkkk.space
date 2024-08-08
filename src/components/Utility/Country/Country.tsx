type CountryProps = {
    className?: string;
    width: number | string;
    height: number | string;
    name: string;
    code: string;
    onClick?: () => any
}

const Country = ({ className, width, height, name, code, onClick }: CountryProps) => (
    <img
        className={className}
        title={name}
        width={width}
        height={height}
        src={`/images/flag_${code}.svg`}
        alt={`${name} Flag`}
        onClick={onClick}
    />
);

export default Country;