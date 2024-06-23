type CountryProps = {
    className?: string;
    width: number | string;
    height: number | string;
    name: string;
    code: string;
}

const Country = ({ className, width, height, name, code }: CountryProps) => (
    <img
        className={className}
        title={name}
        width={width}
        height={height}
        src={`/images/flag_${code}.svg`}
        alt={`${name} Flag`}
    />
);

export default Country;