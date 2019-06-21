import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {
  Background,
  ColumnContainer,
  Content,
  Footer,
  Header,
  Nav,
  RowContainer,
  SideBar
} from "../layouts";
import { SideNav } from "../components";
import { themeStore } from "../stores";

export class Layout extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Background
          getTheme={themeStore.getTheme}
          themeStore={themeStore}
          eventNames={{ themeChange: "change" }}
        >
          <ColumnContainer>
            <Header>The Header</Header>
            <Nav
              getTheme={themeStore.getTheme}
              themeStore={themeStore}
              eventNames={{ themeChange: "change" }}
              items={[
                { text: "Home", uri: "#" },
                { text: "News", uri: "#" },
                { text: "Goats", uri: "#" },
                { text: "test", uri: "#" }
              ]}
            />
            <RowContainer>
              <SideBar>
                <SideNav
                  getTheme={themeStore.getTheme}
                  themeStore={themeStore}
                  eventNames={{ themeChange: "change" }}
                  items={[
                    { url: "https://example.com", text: "example1" },
                    { url: "https://example.com", text: "example2" },
                    { url: "https://example.com", text: "example3" },
                    { url: "https://example.com", text: "example4" },
                    { url: "https://example.com", text: "example5" },
                    { url: "https://example.com", text: "example6" },
                    { url: "https://example.com", text: "example7" }
                  ]}
                />
              </SideBar>
              <Content>{this.props.children}</Content>
            </RowContainer>
            <Footer>The Footer</Footer>
          </ColumnContainer>
        </Background>
      </React.Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf([PropTypes.element.isRequired])
  ]).isRequired
};
