import Styles from "./styles.module.scss";
import { NavigateButton, Wrapper } from "@templates/default/components";
import { Navigate } from "@templates/default/config";

export function Footer() {
    return (
        <footer className={Styles.Footer}>
            <Wrapper className={Styles.Footer_buttonsWrapper}>

                {/* ABOUT Buttons */}
                <NavigateButton
                    navigate={Navigate.ABOUT}
                >
                    About
                </NavigateButton>


                {/* EXPERIENCE Buttons */}
                <NavigateButton
                    navigate={Navigate.EXPERIENCE}
                >
                    Experience
                </NavigateButton>

                {/* PROJECT Buttons */}
                <NavigateButton
                    navigate={Navigate.PROJECTS}
                >
                    Projects
                </NavigateButton>

                {/* CONTACT Buttons */}
                <NavigateButton
                    navigate={Navigate.CONTACT}
                >
                    Contact
                </NavigateButton>

            </Wrapper>

            <p className={Styles.Footer_copyright}>
                Copyright © 2021 John Doe. All rights reserved.
            </p>
        </footer>
    );
}
