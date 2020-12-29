import React from "react";
import {
  Container,
  InputGroup,
  FormControl,
  Button,
  Alert,
  Spinner
} from "react-bootstrap";
import Header from "../../components/Header";
import { ContentContainer, Form } from "./styles";
import ShortenerService from "../../services/shortenerService";

class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      url: "",
      code: "",
      errorMessage: ""
    };
  }

  handleSubmit(event) {
    alert('Um nome foi enviado: ');
   // event.preventDefault();
  }

 /* 
 handleSubmit = async event => {
    alert('Um nome foi enviado: ' + this.state.value);
    event.preventDefault();

    const { url } = this.state;

    this.setState({ isLoading: true, errorMessage: "" });

    if (!url) {
      this.setState({
        isLoading: false,
        errorMessage: "Informe uma URL para encurtar!"
      });
    } else {
      try {
        const service = new ShortenerService();
        const result = await service.generate({ url });

        this.setState({ isLoading: false, code: result.code });
      } catch (error) {
        this.setState({
          isLoading: false,
          errorMessage:
            "Ops! Ocorreu um erro ao tentar encurtar a URL, tente novamente."
        });
      }
    }
  };
  */

  copyToClipboard = () => {
    const element = this.inputURL;
    element.select();
    document.execCommand("copy");
  };

  render() {
    const { isLoading, errorMessage, code } = this.state;

    return (
     
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      
    );
  }
}

export default HomePage;