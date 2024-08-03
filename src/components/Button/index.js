import { ButtonContainer } from "./styles"

export const Button = ({ label, onCLick }) => {

    return (
        <ButtonContainer onClick={onCLick} type="button">
            {label}
        </ButtonContainer>
    )
}
