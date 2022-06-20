import React from 'react'
import Modal from 'react-bootstrap/Modal'
import "./customs.scss"
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import generalPipeImg from "./../../../imgs/generalpipe.png"
import modelImg from "./../../../imgs/model.png"
import preProImg from "./../../../imgs/pre-processing.png"
import resultsImg from "./../../../imgs/results.png"

import "./customs.scss"
function Movie({ props }) {
    const { show, setShow, handleClose } = props
    const handleLink = () => {
        window.open("https://github.com/joaquimcarreira/movie")
    }

    return (

        <Modal
            show={show}
            onHide={handleClose}
            animation={false}
            fullscreen={true}>
            <Modal.Header closeButton>
                <Modal.Title>Movie category prediction </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h3>With the growing amount of money invested in the film industry, and the paradigm shift in the way of consuming and producing films, is it possible to create a tool that serves as a guide to predict the income that a film will have?</h3>
                <h4>General scheme of the project</h4>
                <img src={generalPipeImg} alt="" />
                <h4>The preprocessing is the result of the systematic iteration between the data exploration and the model. The final preprocessing is as follows</h4>
                <img src={preProImg} alt="" />
                <h4>After trying different models, so far the most promising is RandomForest.</h4>
                <img src={modelImg} alt="" />
                <h4>Main difficulties:</h4>
                <ul>
                    <li><h5>Number of categorical variables and their format "many to many".</h5></li>
                    <li><h5>Low confidence in the accuracy of the target variable of the dataset.</h5></li>
                </ul>
                <h4>How was it resolved:</h4>
                <ul>
                    <li><h5>Find the values of the most influential categorical variables and transform the rest into "OTHER".</h5></li>
                    <li><h5>Dividing the target variable into bins, allowing to reduce the influence of inaccuracies of the target variable.</h5></li>
                </ul>
                <h4>The most promising thing that ended up not working:</h4>
                <h5>Convert categorical variables to "longForm" format. Apparently it added more noise than anything else, confusing the models and getting worse results.</h5>
                <h4>The results are far from conclusive and im still working on improving the models, but this still do serves as a kick to go deeper.</h4>
                <img src={resultsImg} alt="" />
            </Modal.Body>
            <Modal.Footer>

                <Button variant="primary" onClick={handleLink} >
                    Got to GitHub
                </Button>
            </Modal.Footer>
        </Modal>

    )
}

export default Movie