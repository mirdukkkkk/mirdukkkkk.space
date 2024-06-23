import {type ComponentChildren} from "preact";
import {type Signal} from "@preact/signals";
import styles from './Checkbox.module.css';

type CheckboxProps = {
    name: string;
    checked?: Signal<boolean> | boolean;
    children: ComponentChildren;
    onChange: (value: boolean) => any;
}

const Checkbox = ({ name, checked = false, children, onChange }: CheckboxProps) => (
    <div className={styles.container}>
        <input
            name={name}
            type="checkbox"
            checked={checked}
            className={styles.check}
            onChange={(event) => onChange(Boolean(event.currentTarget.checked))}
        />
        <label for={name}>
            {children}
        </label>
    </div>
);

export default Checkbox;