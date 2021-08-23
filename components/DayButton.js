import { Button, Text, useDisclosure } from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import ButtonModal from "./Modal";
import ModalForm from "./Form";

export default function DayButton({ day, disabled, dayData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        m={2}
        p={1}
        borderRadius="25"
        bg={
          disabled
            ? "white"
            : dayData && dayData.completed
            ? "teal.200"
            : "gray.200"
        }
        size="lg"
        cursor={disabled ? "default" : "pointer"}
        _hover={{ bg: disabled && "whiteAlpha.100" }}
        // Modal
        onClick={onOpen}
      >
        {!disabled &&
          (dayData && dayData.completed ? (
            <CheckIcon color="black" />
          ) : (
            <Text
              fontFamily="bungee"
              fontWeight="light"
              color="#5a06ff"
              fontSize="xl"
            >
              {day}
            </Text>
          ))}
      </Button>
      {!disabled && (
        <ButtonModal
          isOpen={isOpen}
          onClose={onClose}
          day={day}
          title={`Day ${day}`}
          body={<ModalForm onClose={onClose} day={day} />}
        />
      )}
    </>
  );
}
