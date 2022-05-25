import React from 'react';
import { connect } from 'react-redux'

function XucXac(props) {
    const arrRandom = props.randomImg.xucXac[0].arr
    return (
        <div>
            {
                arrRandom.map((item, index) => {
                    return (
                        <img key={index} className="img-xucxac" src={require('../assets/img/' + `${item}` + '.png')} alt="" />
                    )
                })
            }
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        randomImg: state.stateXucXac
    }
}

export default connect(mapStateToProps)(XucXac);