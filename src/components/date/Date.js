import { Form, Table } from "react-bootstrap";
import ReactDatePicker from "react-datepicker";
import styled from "styled-components";

const SearchBox = styled.div`

`;

function Date() {
  const Styles = {
    inputForm: {
      margin: "20px"
    },
    formItem: {

    },
    formInput: {
      width: "400px"
    }
  }
  return (
    <Table striped bordered hover>
      <tbody>
        <tr>
          <td>검색어</td>
          <td>
            <Form.Check className="form-check-inline">
              <Form.Check.Input id="search" value="search" type="text" style={Styles.formItem} />
            </Form.Check>
          </td>
        </tr>
      </tbody>
    </Table>
  )
};

export default Date;