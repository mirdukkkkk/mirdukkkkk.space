import {type ComponentType} from "preact";
import {useLocation} from "wouter-preact";

type LocatedProps = { location: string };

function withLocation<T extends {}>(
    Component: ComponentType<T & LocatedProps>
) {
    const LocatedComponent = (props: T) => {
        const [location, _setLocation] = useLocation();
        return <Component {...props} location={location} />;
    };

    LocatedComponent.displayName = `checkException(${Component.displayName})`;
    return LocatedComponent;
}

export { type LocatedProps };
export default withLocation;