import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import XLSX from 'xlsx';

const validationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone number is required'),
  quantity: Yup.number().required('Quantity is required'),
  price: Yup.number().required('Price is required'),
});

function exportDataToExcel(formData) {
  // Read existing Excel file
  const workbook = XLSX.readFile('C:/Users/LENOVO/Desktop/EASI-Transport/easi-transport-front/src/Classeur1.xlsx');
  // Select the sheet you want to write to
  const worksheet = workbook.Sheets['Sheet1'];
  // Insert data from the form into the Excel sheet
  worksheet.A2.v = formData.name;
  worksheet.B2.v = formData.email;
  worksheet.C2.v = formData.phone;
  // Calculate the total amount based on the form data
  worksheet.E2.v = formData.quantity * formData.price;
  // Save the updated Excel file
  XLSX.writeFile(workbook, 'C:/Users/LENOVO/Desktop/EASI-Transport/easi-transport-front/src/Classeur1.xlsx');
}

function fetchDataFromExcel() {
  // Read existing Excel file
  const workbook = XLSX.readFile('C:/Users/LENOVO/Desktop/EASI-Transport/easi-transport-front/src/Classeur1.xlsx');
  // Select the sheet you want to read from
  const worksheet = workbook.Sheets['Sheet1'];
  // Fetch the result from the calculation
  const totalAmount = worksheet.E2.v;
  // Return the result to the ReactJS application
  return totalAmount;
}

function TestForm() {
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        quantity: '',
        price: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        exportDataToExcel(values);
        const totalAmount = fetchDataFromExcel();
        alert(`The total amount is ${totalAmount}`);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div>
            <label htmlFor="name">Name:</label>
            <Field type="text" id="name" name="name" />
            {errors.name && touched.name && <div>{errors.name}</div>}
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <Field type="email" id="email" name="email" />
            {errors.email && touched.email && <div>{errors.email}</div>}
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <Field type="text" id="phone" name="phone" />
            {errors.phone && touched.phone && <div>{errors.phone}</div>}
          </div>
          <div>
            <label htmlFor="quantity">Quantity:</label>
            <Field type="number" id="quantity" name="quantity" />
            {errors.quantity && touched.quantity && <div>{errors.quantity}</div>}
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <Field type="number" id="price" name="price" />
            {errors.price && touched.price && <div>{errors.price}</div>}
          </div>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}

export default TestForm;