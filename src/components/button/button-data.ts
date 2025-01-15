import { ButtonData } from "./button-types";

export const handleClose = () => {
  alert("Hey there 👋, why you wanna close? 😢 I have worked hard and would love to show what I am capable of if given the opportunity to take on this role and embark on this journey. Let's rock together! 🤘 @SofiaRecruiter > MarceloViannaDev :)");
};

//text with more than two lines but normal
const text = "This is a two line button that terminates with...";
//text way bigger than two lines but keeping what was asked
const textBig = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a illum quae tempore officiis Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit a illum quae tempore officiis";

export const buttonsData: ButtonData[] = [
  
  /************************************************************************************************
   * 0th row cards
   ************************************************************************************************/
  {
    text: text,
    variant: "icon",  
    cardVariant: "default",
    disabled: false,
  },
  
  /************************************************************************************************
   * 1st row cards
   ************************************************************************************************/
  {
    text: textBig,
    variant: "icon",
    cardVariant: "default",
    disabled: false,
  },
  {
    text: textBig,
    variant: "default",
    cardVariant: "default",
    disabled: false,
  },
  {
    text: text,
    variant: "icon",
    cardVariant: "default",
    disabled: false,
  },

  /************************************************************************************************
   * 2st row cards
   ************************************************************************************************/
  {
    text: text,
    variant: "icon",
    cardVariant: "border",
    disabled: false,
  },
  {
    text: textBig,
    variant: "icon",
    cardVariant: "border",
    disabled: true,
  },
  {
    text: text,
    variant: "icon",
    cardVariant: "border",
    disabled: false,
  },
];

