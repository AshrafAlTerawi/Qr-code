import React from "react";
import { Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// 1. تعريف الـ styles
const styles = StyleSheet.create({
  page: { padding: 20 },
  header: { fontSize: 18, marginBottom: 10 },
  row: { flexDirection: "row", marginBottom: 5 },
  cell: { flex: 1, fontSize: 12 },
});

const EmployeesPDF = ({ users }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.header}>Employees List</Text>
      {users.map((emp, index) => (
        <View key={index} style={styles.row}>
          <Text style={styles.cell}>{emp.id}</Text>
          <Text style={styles.cell}>{emp.full_name}</Text>
          <Text style={styles.cell}>{emp.email}</Text>
          <Text style={styles.cell}>{emp.phone_number}</Text>
        </View>
      ))}
    </Page>
  </Document>
);

export default EmployeesPDF;
