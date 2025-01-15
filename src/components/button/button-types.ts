//types aqui
type ButtonVariant = "default" | "icon";
type CardVariant = "default" | "border";
type Text = string;

export interface ButtonData {
	text: Text;
	variant: ButtonVariant;
	disabled: boolean;
	cardVariant: CardVariant;
}

export interface ButtonProps {
	text: Text;
	variant?: ButtonVariant;
	disabled?: boolean;
  isHovered?: boolean;
  rowVariant?: "first" | "second";
}
