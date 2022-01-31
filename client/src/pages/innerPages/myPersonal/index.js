import { React, useState, useEffect } from 'react';
import { Col, Row, Container, Form, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import axios from 'axios';
export default function MyPersonal() {
    const state = useSelector(state => state);
    const { img_url, description, username, link_name_one, link_url_one, link_name_two, link_url_two, link_name_three, link_url_three } = state.user
    const [stateSkills, setSkills] = useState([]);
    const [profileObj, setProfileObj] = useState(state.user);
    useEffect(() => {
        axios.get(`/api/skill/${state.user.id}`).then((res) => {
            console.log(res)
            let skills = res.data.map(skill => {
                return (
                    <div value={skill.id} className='flex-skill'>
                        <p>{skill.name}</p>
                        <p>{skill.currentLevel}</p>
                    </div>
                )
            })
            setSkills(skills)
        })
    }, [])
    function displayEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "none";
        document.getElementById(editContainer).style.display = "block";
    }
    function hideEdit(displayContainer, editContainer) {
        document.getElementById(displayContainer).style.display = "block";
        document.getElementById(editContainer).style.display = "none";
    }
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <Row>
                            <div id="currentProfileImg">
                                {img_url ? <img src={img_url} alt="profile image" ></img> : "Add an Image"}
                            </div>
                            <Form.Group id="editProfileImg" style={{ display: "none" }}>
                                <Form.Label>Image Url</Form.Label>
                                <Form.Control as="textarea" onChange={(e) => setProfileObj({ ...profileObj, img_url: e.target.value })}>{img_url}</Form.Control>
                                <Button type="button" onClick={() => { hideEdit("currentProfileImg", "editProfileImg") }}>Save</Button>
                            </Form.Group>
                            <i class="fas fa-pencil-alt" onClick={() => displayEdit("currentProfileImg", "editProfileImg")}></i>
                        </Row>
                        <Row>
                            {link_url_one ? <ul id="currentProfileLinks">
                                <li>
                                    <a href={link_url_one}>{link_name_one}</a>
                                    <i class="fas fa-pencil-alt"></i>
                                </li>
                                <li>
                                    <a href={link_url_two}>{link_name_two}</a>
                                    <i class="fas fa-pencil-alt"></i>
                                </li>
                                <li>
                                    <a href={link_url_three}>{link_name_three}</a>
                                    <i class="fas fa-pencil-alt"></i>
                                </li>
                            </ul> :
                                <button>Add Professional Links</button>}
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h2>{username}</h2>
                        </Row>
                        <Row><p id="currentProfileEmail">{username}</p> <i onClick={() => displayEdit("currentProfileEmail", "editProfileEmail")} class="fas fa-pencil-alt"></i>
                            <Form.Group id="editProfileEmail" style={{ display: "none" }}>
                                <Form.Label>Email</Form.Label>
                                <Form.Control as="textarea" onChange={(e) => setProfileObj({ ...profileObj, username: e.target.value })}>{username}</Form.Control>
                                <Button type="button" onClick={() => { hideEdit("currentProfileEmail", "editProfileEmail"); console.log(profileObj) }}>Save</Button>
                            </Form.Group>
                        </Row>
                        <Row><p>**********</p>  <a href="#">reset passoword</a></Row>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div id="currentProfileDescription">{description ? description : "Add a Description"}</div>

                        <Form.Group id="editProfileDescription" style={{ display: "none" }} >
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={(e) => setProfileObj({ ...profileObj, description: e.target.value })} as="textarea" rows={3}>
                                {description}
                            </Form.Control>
                            <Button type="button" onClick={() => { console.log(profileObj); hideEdit("currentProfileDescription", "editProfileDescription") }}>Save</Button>
                        </Form.Group>

                    </Col>
                    <i onClick={() => displayEdit("currentProfileDescription", "editProfileDescription")} class="fas fa-pencil-alt"></i>
                </Row>
            </Container >
        </div >
    )
}