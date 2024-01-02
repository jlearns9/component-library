// import React from "react"
import Header from "./components/Header.jsx";
import Carousel from "./components/Carousel.jsx";
import Library from "./components/Library.jsx";
import Badge from "./components/Badge/index.jsx";
import Banner from "./components/Banner/index.jsx";
import Card from "./components/Card/index.jsx";
import Testimonial from "./components/Testimonial/index.jsx";
import Tooltip from "./components/Tooltip/index.jsx";
import Toast from "./components/Toast/index.jsx";

import {
    CloudUpload,
    Security,
    Community,
    WorkcationLogo,
} from "./assets/svg.jsx";

export default function App() {
    return (
        <>
            <Header>Jorge&apos;s Component Library++</Header>
            <Carousel>
                {/* Shape Options: square, pill */}
                <Library type="badge" style="">
                    <Badge shape="square">
                        <Badge.Btn color="gray">Badge</Badge.Btn>
                        <Badge.Btn color="red">Badge</Badge.Btn>
                        <Badge.Btn color="yellow">Badge</Badge.Btn>
                        <Badge.Btn color="green">Badge</Badge.Btn>
                        <Badge.Btn color="blue">Badge</Badge.Btn>
                        <Badge.Btn color="indigo">Badge</Badge.Btn>
                        <Badge.Btn color="purple">Badge</Badge.Btn>
                        <Badge.Btn color="pink">Badge</Badge.Btn>
                    </Badge>
                    <Badge shape="pill">
                        <Badge.Btn color="gray">Badge</Badge.Btn>
                        <Badge.Btn color="red">Badge</Badge.Btn>
                        <Badge.Btn color="yellow">Badge</Badge.Btn>
                        <Badge.Btn color="green">Badge</Badge.Btn>
                        <Badge.Btn color="blue">Badge</Badge.Btn>
                        <Badge.Btn color="indigo">Badge</Badge.Btn>
                        <Badge.Btn color="purple">Badge</Badge.Btn>
                        <Badge.Btn color="pink">Badge</Badge.Btn>
                    </Badge>
                </Library>
                {/* Status Options: success, waring, error, neutral */}
                <Library type="banner" style="">
                    <Banner status="success">
                        <Banner.Title>Congratulations!</Banner.Title>
                        <Banner.Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid pariatur, ipsum similique veniam.
                        </Banner.Description>
                    </Banner>
                    <Banner status="warning">
                        <Banner.Title>Attention</Banner.Title>
                        <Banner.Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Aliquid pariatur, ipsum similique veniam quo
                            totam eius aperiam dolorum.
                        </Banner.Description>
                    </Banner>
                    <Banner status="error">
                        <Banner.Title>
                            There is a problem with your application
                        </Banner.Title>
                    </Banner>
                    <Banner status="neutral">
                        <Banner.Title>Update available</Banner.Title>
                    </Banner>
                </Library>
                {/* Icon Options: <CloudUpload />, <Security />, <Community /> */}
                <Library type="card" style="flex wrap center">
                    <Card icon={<CloudUpload />}>
                        <Card.Title>Easy Deployment</Card.Title>
                        <Card.Description>
                            Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card.Description>
                    </Card>
                    <Card icon={<Security />}>
                        <Card.Title>Safe & Secure</Card.Title>
                        <Card.Description>
                            Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card.Description>
                    </Card>
                    <Card icon={<Community />}>
                        <Card.Title>Community Driven</Card.Title>
                        <Card.Description>
                            Ac tincidunt sapien vehicula erat auctor
                            pellentesque rhoncus. Et magna sit morbi lobortis.
                        </Card.Description>
                    </Card>
                </Library>
                {/* Testimonial Options:
                 * Version 1: name/role/image
                 * Version 2: name/role/logo?
                 */}
                <Library type="testimonial">
                    <Testimonial
                        name="Wojak"
                        role="Internet Meme"
                        image="https://upload.wikimedia.org/wikipedia/en/c/cc/Wojak_cropped.jpg"
                    >
                        <Testimonial.Quote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed urna nulla vitae laoreet augue. Amet
                            feugiat est integer dolor auctor adipiscing nunc
                            urna, sit.
                        </Testimonial.Quote>
                    </Testimonial>
                    <Testimonial
                        name="May Andersons"
                        role="Workcation, CTO"
                        logo={<WorkcationLogo />}
                    >
                        <Testimonial.Quote>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed urna nulla vitae laoreet augue. Amet
                            feugiat est integer dolor auctor adipiscing nunc
                            urna, sit.
                        </Testimonial.Quote>
                    </Testimonial>
                </Library>
                <Library type="tooltip" style="flex wrap center">
                    <Tooltip>
                        <Tooltip.Item color="gray" stroke="#C7C7C7">
                            <Tooltip.Title>Archive Notes</Tooltip.Title>
                            <Tooltip.Description>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit oluptatum tenetur.
                            </Tooltip.Description>
                        </Tooltip.Item>
                        <Tooltip.Button interactionType="click">Click Me</Tooltip.Button>
                    </Tooltip>
                    <Tooltip>
                        <Tooltip.Item color="blue" stroke="#1C51B9">
                            <Tooltip.Title>Archive Notes</Tooltip.Title>
                            <Tooltip.Description>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit oluptatum tenetur.
                            </Tooltip.Description>
                        </Tooltip.Item>
                        <Tooltip.Button interactionType="click">
                            Click Me
                        </Tooltip.Button>
                    </Tooltip>
                    <Tooltip>
                        <Tooltip.Item color="green" stroke="#41A557">
                            <Tooltip.Title>Archive Notes</Tooltip.Title>
                            <Tooltip.Description>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit oluptatum tenetur.
                            </Tooltip.Description>
                        </Tooltip.Item>
                        <Tooltip.Button interactionType="hover">
                            Hover Over Me
                        </Tooltip.Button>
                    </Tooltip>
                    <Tooltip>
                        <Tooltip.Item color="pink" stroke="#C7369E">
                            <Tooltip.Title>Archive Notes</Tooltip.Title>
                            <Tooltip.Description>
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit oluptatum tenetur.
                            </Tooltip.Description>
                        </Tooltip.Item>
                        <Tooltip.Button interactionType="hover">
                            Hover Over Me
                        </Tooltip.Button>
                    </Tooltip>
                </Library>
                {/* Status Options: success, warning, info, error */}
                <Library type="toast" style="flex wrap center">
                    <Toast.Portal color="green" status="success">
                        <Toast.Title>Success</Toast.Title>
                        <Toast.Description>
                            Your work has been saved
                        </Toast.Description>
                    </Toast.Portal>
                    <Toast.Portal color="yellow" status="warning">
                        <Toast.Title>Warning</Toast.Title>
                        <Toast.Description>
                            A network error was detected
                        </Toast.Description>
                    </Toast.Portal>
                    <Toast.Portal color="blue" status="info">
                        <Toast.Title>Information</Toast.Title>
                        <Toast.Description>
                            Please read updated information
                        </Toast.Description>
                    </Toast.Portal>
                    <Toast.Portal color="red" status="error">
                        <Toast.Title>Error</Toast.Title>
                        <Toast.Description>
                            Please re-save your work again
                        </Toast.Description>
                    </Toast.Portal>
                </Library>
            </Carousel>
        </>
    );
}
