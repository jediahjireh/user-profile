// components/UserProfile.jsx

// import react-bootstrap components
import { Button, Card, ListGroup, Tab, Tabs } from "react-bootstrap";

// import react-icons components
import {
  FaBook,
  FaBriefcase,
  FaCode,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLanguage,
  FaLinkedin,
  FaPhone,
  FaUser,
  FaWalking,
} from "react-icons/fa";

// define user profile component
function UserProfile({ user }) {
  return (
    <div className="d-flex flex-wrap">
      <Card className="mb-3" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={user.profilePicture} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted text-center">
            {user.title}
          </Card.Subtitle>

          <Card.Text className="contact-information">
            <FaPhone />
            &nbsp;&nbsp;
            <Card.Link href={`https://wa.me/${user.contact.mobile}`}>
              +27 82 636 3910
            </Card.Link>
            <br />
            <FaEnvelope />
            &nbsp;&nbsp;
            <Card.Link href={`mailto:${user.contact.email}`}>
              {user.contact.email}
            </Card.Link>
            <br />
            <FaLinkedin />
            &nbsp;&nbsp;
            <Card.Link href={user.contact.linkedIn}>LinkedIn</Card.Link>
            <br />
            <FaGithub />
            &nbsp;&nbsp;
            <Card.Link href={user.contact.github}>GitHub</Card.Link>
            <br />
            <FaCode />
            &nbsp;&nbsp;
            <Card.Link href={user.contact.hyperiondev}>
              HyperionDev Portfolio
            </Card.Link>
          </Card.Text>
        </Card.Body>
      </Card>

      <div style={{ flex: 1, marginLeft: "1rem" }}>
        <Tabs
          defaultActiveKey="about"
          id="user-information-tabs"
          className="mb-3"
        >
          <Tab
            eventKey="about"
            title={
              <span>
                <FaUser /> About
              </span>
            }
          >
            <Card>
              <Card.Body>
                <hr />
                <Card.Title>Lifelong Learner:</Card.Title>
                <hr />
                <Card.Text>{user.about.lifelongLearner}</Card.Text>
                <hr />
                <Card.Title>Debugging the World:</Card.Title>
                <hr />
                <Card.Text>{user.about.debuggingTheWorld}</Card.Text>
                <hr />
                <Card.Title>Vision for the Future:</Card.Title>
                <hr />
                <Card.Text>{user.about.visionForFuture}</Card.Text>
                <hr />
                <Card.Title>Tech Toolbox:</Card.Title>
                <hr />
                <Card.Text>{user.about.techToolbox}</Card.Text>
              </Card.Body>
            </Card>
          </Tab>

          <Tab
            eventKey="experience"
            title={
              <span>
                <FaWalking /> Experience
              </span>
            }
          >
            <Card>
              <Card.Body>
                {user.experience.map((item, index) => (
                  <div key={index}>
                    <hr />
                    <Card.Title>
                      <Card.Link href={`https://www.hyperiondev.com`}>
                        {item.company}
                      </Card.Link>
                    </Card.Title>
                    <hr />
                    <Card.Subtitle>Role:</Card.Subtitle>
                    <Card.Text>{item.role}</Card.Text>
                    <Card.Subtitle>Duration:</Card.Subtitle>
                    <Card.Text>{item.duration}</Card.Text>
                    <Card.Subtitle>Description:</Card.Subtitle>
                    <Card.Text>{item.description}</Card.Text>
                  </div>
                ))}
              </Card.Body>
            </Card>
          </Tab>

          <Tab
            eventKey="skills"
            title={
              <span>
                <FaCode /> Skills
              </span>
            }
          >
            <ListGroup className="list-group-flush">
              {user.skills.map((skill, index) => (
                <Button variant="outline-secondary" key={index} className="m-1">
                  {skill}
                </Button>
              ))}
            </ListGroup>
          </Tab>

          <Tab
            eventKey="courses"
            title={
              <span>
                <FaBook /> Courses
              </span>
            }
          >
            <ListGroup className="list-group-flush">
              {user.courses.map((course, index) => (
                <Button variant="outline-secondary" key={index} className="m-1">
                  {course}
                </Button>
              ))}
            </ListGroup>
          </Tab>

          <Tab
            eventKey="languages"
            title={
              <span>
                <FaLanguage /> Languages
              </span>
            }
          >
            <ListGroup className="list-group-flush">
              {user.languages.map((language, index) => (
                <Button variant="outline-secondary" key={index} className="m-1">
                  {language.name} - {language.proficiency}
                </Button>
              ))}
            </ListGroup>
          </Tab>

          <Tab
            eventKey="organisations"
            title={
              <span>
                <FaBriefcase /> Organisations
              </span>
            }
          >
            <ListGroup className="list-group-flush">
              {user.organisations.map((organisation, index) => (
                <ListGroup.Item
                  key={index}
                  // ensure colour and styling is consistent with the other components
                  style={{
                    backgroundColor: "#1e1e1e",
                    border: "none",
                    // round corners like the card component
                    borderRadius: "0.5rem",
                    marginBottom: "1rem",
                    padding: "1rem",
                    color: "#f0f0f0",
                    overflow: "hidden",
                    // shadow for better visibility
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                  }}
                >
                  <Button variant="outline-secondary" className="m-1 w-100">
                    <strong>{organisation.name}</strong>
                    <br />
                    {organisation.role} ({organisation.duration})
                  </Button>

                  <Card>
                    <Card.Body>
                      <Card.Subtitle>Duties:</Card.Subtitle>
                      <Card.Text>{organisation.description}</Card.Text>
                    </Card.Body>
                  </Card>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Tab>

          <Tab
            eventKey="causes"
            title={
              <span>
                <FaHeart /> Causes
              </span>
            }
          >
            <ListGroup className="list-group-flush">
              {user.causes.map((cause, index) => (
                <Button variant="outline-secondary" key={index} className="m-1">
                  {cause}
                </Button>
              ))}
            </ListGroup>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}

// export user component
export default UserProfile;
