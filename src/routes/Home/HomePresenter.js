import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const HomePresenter = ({ countryUs, bbcNews, business, loading, error }) =>
    <h1>{countryUs}</h1>

HomePresenter.propTypes = {
    countryUs: PropTypes.array,
    bbcNews: PropTypes.array,
    business: PropTypes.array,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
};

export default HomePresenter;