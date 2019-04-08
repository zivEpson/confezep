import _ from "lodash";
import React, { Component } from "react";
import { UncontrolledCollapse, Button } from "reactstrap";

import Prism from "prismjs";
import "../../utils/CodeBlockUtils/prism.css";

class QuestionBody extends Component {
  componentDidMount() {
    Prism.highlightAll();
  }

  renderHints = hints => {
    return _.map(hints, (hint, index) => {
      return (
        <div key={index}>
          <Button
            outline
            color="link"
            id={"hint" + index}
            size="sm"
            style={{ marginBottom: "1rem" }}
          >
            Hint {index + 1}
          </Button>

          <UncontrolledCollapse toggler={"#hint" + index}>
            <div className="card">
              <div className="card-body font-weight-light">{hint}</div>
            </div>
          </UncontrolledCollapse>
        </div>
      );
    });
  };

  renderFields = () => {
    const { formValues } = this.props;
    return (
      <div className="card mt-3">
        {/* title */}
        <div class="card-header">
          <h5 className="card-title text-center text-capitalize font-weight-bold">
            {formValues["title"]}
          </h5>
        </div>
        <div className="card-body">
          {/* body */}
          <div className="card ">
            <div className="card-body font-weight-light">
              <p className="card-text">{formValues["body"]}</p>
              <div className="card" style={{ border: "none" }}>
                <div className="card-body">
                  <figure>
                    <pre>
                      <code className="language-javascript">
                        {formValues["bodyCode"]}
                      </code>
                    </pre>
                  </figure>
                </div>
              </div>
            </div>
          </div>

          {/* hints */}
          <div className="mt-3">{this.renderHints(formValues["hints"])}</div>
          {/* answer */}
          <Button
            outline
            color="link"
            id="toggler"
            size="sm"
            style={{ marginBottom: "1rem" }}
            className="mt-3"
          >
            Answer
          </Button>

          <UncontrolledCollapse toggler="#toggler">
            <div className="card ">
              <div className="card-body font-weight-light">
                {formValues["answer"]}
              </div>
            </div>
          </UncontrolledCollapse>
        </div>
      </div>
    );
  };

  render() {
    return <div>{this.renderFields()}</div>;
  }
}

export default QuestionBody;
