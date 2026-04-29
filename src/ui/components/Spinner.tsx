import { Text, useAnimation } from "ink";

const Spinner = ({ text }: { text: string }) => {
  const { frame } = useAnimation({ interval: 80 });
  const characters = ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"];

  return (
    <Text>
      {characters[frame % characters.length]} {text}
    </Text>
  );
};

export default Spinner;
