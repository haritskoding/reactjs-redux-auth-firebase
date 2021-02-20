import React, { Component } from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import addStatCardAction from "../../actions/addStatCardAction";
import getAllStatCardsAction from "../../actions/getAllStatCardsAction";

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

class Header extends React {
  componentDidMount() {
    this.props.getAllStatCardsAction();
  }

  render() {
    return (
      <>
        <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
          <Container>
            <Row>
              <Col lg="6" xl="3">
                <Button
                  color="primary"
                  onClick={() =>
                    this.props.addStatCardAction(
                      "Performance",
                      "49.65%",
                      "fas fa-percent",
                      "bg-into text-white rounded-circle shadow",
                      "fas fa-arrow-up",
                      "text-success",
                      "12%",
                      "Since last month"
                    )
                  }
                >
                  Add stat card
                </Button>
              </Col>
            </Row>
          </Container>
          <br />

          <Container fluid>
            <div className="header-body">
              <Row>
                {this.props.statCardState &&
                  this.props.statCardState.statCardState &&
                  this.props.statCardState.statCardState.map((prop, key) => {
                    return (
                      <Col lg="6" xl="3" key={key}>
                        <Card className="card-stats mb-4 mb-xl-0"></Card>
                        <CardBody>
                          <Row>
                            <div className="col">
                              <CardTitle
                                tag="h5"
                                className="text-uppercase text-muted mb-0"
                              >
                                {prop.statName}
                                <span className="h2 font-weight-bold mb-0">
                                  {prop.statDescription}
                                </span>
                              </CardTitle>
                            </div>
                            <Col className="col-auto">
                              <div
                                className={
                                  "icon icon-shape" + prop.statIconColor
                                }
                              >
                                <i className={prop.statIcon}></i>
                              </div>
                            </Col>
                          </Row>
                          <p className="mt-3 mb-0 text-muted text-sm">
                            <span clssName={"mr-2" + prop.statFooterIconState}>
                              <i className={prop.statFooterIcon}></i>
                              {prop.statFooterPercentage}
                            </span>
                            <span className="text-nowrap">
                              {prop.statFooterText}
                            </span>
                          </p>
                        </CardBody>
                      </Col>
                    );
                  })}
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ ...state });
const mapDispatchToProps = (dispatch) => ({
  getAllStatCardsAction: () => dispatch(getAllStatCardsAction()),
  addStatCardAction: (
    statName,
    statDescription,
    statIcon,
    statIconColor,
    statFooterIcon,
    statFooterIconState,
    statFooterPercentage,
    statFooterText
  ) =>
    dispatch(
      addStatCardAction(
        statName,
        statDescription,
        statIcon,
        statIconColor,
        statFooterIcon,
        statFooterIconState,
        statFooterPercentage,
        statFooterText
      )
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
