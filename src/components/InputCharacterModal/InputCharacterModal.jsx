import React, { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import {
  ModalDiv,
  ModalContent,
  ModalHeader,
  CloseButton,
  SubmitButton,
  ErrorText,
  InputWrapper,
} from "./styles";

const InputCharacterSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name of the Character is required")
    .max(12, "Name can be at most 12 characters long")
    .min(4, "Name can be at least 4 characters long"),
  quote: Yup.string().max(50, "Quotes can be at most 50 characters long"),
  description: Yup.string()
    .required("Character description is required")
    .max(175, "Description can be at most 175 characters long"),
  imageUrl: Yup.string().url("Invalid URL format"),
});

const InputCharacterModal = ({
  isOpen,
  onClose,
  onAddCharacter,
  onEditCharacter,
  editingCharacter,
}) => {
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (editingCharacter) {
      setErrorMessage("");
    }
  }, [editingCharacter]);

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    setSubmitting(true);
    try {
      if (editingCharacter) {
        await onEditCharacter({ ...editingCharacter, ...values });
      } else {
        await onAddCharacter(values);
      }
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error submitting character:", error);
      if (axios.isAxiosError(error)) {
        setErrorMessage(
          error.response?.data?.message ||
            "An error occurred while submitting the character."
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <ModalDiv>
      <ModalContent>
        <ModalHeader>
          <h2>{editingCharacter ? "Edit Character" : "Add New Character"}</h2>
          <CloseButton onClick={onClose}>X</CloseButton>
        </ModalHeader>
        <Formik
          initialValues={{
            name: editingCharacter?.name || "",
            quote: editingCharacter?.quote || "",
            description: editingCharacter?.description || "",
            imageUrl: editingCharacter?.image || "",
          }}
          validationSchema={InputCharacterSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form>
              <InputWrapper>
                <label htmlFor="name">Name*: </label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component={ErrorText} />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="quote">Quote: </label>
                <Field name="quote" type="text" />
                <ErrorMessage name="quote" component={ErrorText} />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="description">Description*: </label>
                <Field name="description" as="textarea" />
                <ErrorMessage name="description" component={ErrorText} />
              </InputWrapper>
              <InputWrapper>
                <label htmlFor="imageUrl">Image URL: </label>
                <Field name="imageUrl" type="text" />
                <ErrorMessage name="imageUrl" component={ErrorText} />
              </InputWrapper>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting
                  ? editingCharacter
                    ? "Updating..."
                    : "Adding..."
                  : editingCharacter
                  ? "Update Character"
                  : "Add Character"}
              </SubmitButton>
            </Form>
          )}
        </Formik>
        {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
      </ModalContent>
    </ModalDiv>
  );
};

export default InputCharacterModal;
