// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function FormInput(props: any) {

    const { validation, ...inputProps } = props;

    return (
        <input { ...inputProps } />
    );
}