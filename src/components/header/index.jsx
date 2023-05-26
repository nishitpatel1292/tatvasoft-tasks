import React, { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { headerStyle } from "./style";
import cartIcon from "../../assets/images/cart.png";
import List from "@material-ui/core/List";
import AppBar from "@material-ui/core/AppBar";

import ListItem from "@material-ui/core/ListItem";
import siteLogo from "../../assets/images/site-logo.svg";

import searchIcon from "../../assets/images/search.png";
import { TextField, Button } from "@material-ui/core";
import Shared from "../../utils/shared";
import { useAuthContext } from "../../context/auth";
import { RoutePaths } from "../../utils/enum";

import bookService from "../../service/book.service";


const Header = () => {
  const classes = headerStyle();
  const authContext = useAuthContext();
  const open = false;
  const [query, setquery] = useState("");
  const [openSearchResult, setOpenSearchResult] = useState(false);
  const [bookList, setbookList] = useState([]);




  const items = useMemo(() => {
    return Shared.NavigationItems.filter(
      (item) =>
        !item.access.length || item.access.includes(authContext.user.roleId)
    );
  }, [authContext.user]);

 

  const getBooks = async () => {
    const res = await bookService.getAll({
      pageIndex: 1,
      pageSize: 10,
      keyword: query,
    });
    setbookList(res.records);
  };

  const search = () => {
    document.body.classList.add("search-results-open");
    getBooks();
    setOpenSearchResult(true);
  };



  return (
    <div className={classes.headerWrapper}>
      <AppBar className="site-header" id="header" position="static">
        <div
          className="top-header"
          style={{ display: open ? "none" : "block" }}
        ></div>
        <div className="bottom-header">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo-wrapper">
                <Link to="/" className="site-logo" title="logo">
                  <img src={siteLogo} alt="logo" />
                </Link>
              </div>
              <div className="nav-wrapper">
                <div className="top-right-bar">
                  <List className="top-nav-bar">
                    {!authContext.user.id && (
                      <>
                        <ListItem>
                          <NavLink to={RoutePaths.Login} title="Login">
                            Login
                          </NavLink>
                        </ListItem>
                        <ListItem>
                          <Link to={RoutePaths.Register} title="Register">
                            Register
                          </Link>
                        </ListItem>
                      </>
                    )}
                    {items.map((item, index) => (
                      <ListItem key={index}>
                        <Link to={item.route} title={item.name}>
                          {item.name}
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                  <List className="cart-country-wrap">
                  <ListItem className="cart-link">
                      <Link to="/cart" title="Cart">
                        <img src={cartIcon} alt="cart.png" />
                        Cart
                      </Link>
                    </ListItem>
                    <ListItem className="hamburger">
                      <span></span>
                    </ListItem>
                  </List>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="search-overlay"
          onClick={() => {
            setOpenSearchResult(false);
            document.body.classList.remove("search-results-open");
          }}
        ></div>
        <div className="header-search-wrapper">
          <div className="container">
            <div className="header-search-outer">
              <div className="header-search-inner">
                <div className="text-wrapper">
                  <TextField
                    id="text"
                    name="text"
                    placeholder="What are you looking for..."
                    variant="outlined"
                    value={query}
                    onChange={(e) => setquery(e.target.value)}
                  />

                  {openSearchResult && (
                    <>
                      <div className="product-listing">
                        {bookList?.length === 0 && (
                          <p className="no-product">No product found</p>
                        )}

                        {/* <p className="loading">Loading....</p> */}
                        <List className="related-product-list">
                          {bookList?.length > 0 &&
                            bookList.map((item, i) => {
                              return (
                                <ListItem key={i}>
                                  <div className="inner-block">
                                    <div className="left-col">
                                      <span className="title">{item.name}</span>
                                      <p>{item.description}</p>
                                    </div>
                                    <div className="right-col">
                                      <span className="price">
                                        {item.price}
                                      </span>

                                    </div>
                                  </div>
                                </ListItem>
                              );
                            })}
                        </List>
                      </div>
                    </>
                  )}
                </div>
                <Button
                  type="submit"
                  className="green-btn btn"
                  variant="contained"
                  color="primary"
                  disableElevation
                  onClick={search}
                >
                  <em>
                    <img src={searchIcon} alt="search" />
                  </em>
                  Search
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AppBar>
    </div>
  );
};

export default Header;
