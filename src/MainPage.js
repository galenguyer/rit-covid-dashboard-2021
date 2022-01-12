import React from "react";
import Card from "./Card";
import GoatCounter from "./GoatCounter";

const MainPage = (props) => {
    const data = props.data;
    const latest = data[data.length - 1];
    const prior = data[data.length - (1 + props.timeDifference)];

    return (
        <>
            <h2 className="text-xl">
                This site shows data from the 2021 Fall semester.
            </h2>
            <br />
            <div id="total">
                <h4 className="text-2xl">
                    Total Positive Cases Since August 23
                </h4>
                <div className="Section">
                    <Card
                        name="Students"
                        latest={latest.total_students}
                        diff={latest.total_students - prior.total_students}
                        link="/totalstudents"
                    />
                    <Card
                        name="Staff"
                        latest={latest.total_staff}
                        diff={latest.total_staff - prior.total_staff}
                        link="/totalstaff"
                    />
                </div>
            </div>
            <br />
            <div id="new">
                <h4 className="text-2xl">New Positive Cases From Past 14 Days</h4>
                <div className="Section">
                    <Card
                        name="Students"
                        latest={latest.new_students}
                        diff={latest.new_students - prior.new_students}
                        link="/newstudents"
                    />
                    <Card
                        name="Staff"
                        latest={latest.new_staff}
                        diff={latest.new_staff - prior.new_staff}
                        link="/newstaff"
                    />
                </div>
            </div>
            { /* <br />
            <div id="quarantine">
                <h4 className="text-2xl">Number of Students in Quarantine</h4>
                <h5 className="text-base">
                    Quarantine separates and restricts the movement of people who were exposed to a contagious disease
                    to see if they become sick.
                </h5>
                <div className="Section">
                    <Card
                        name="On Campus"
                        latest={latest.quarantine_on_campus}
                        diff={latest.quarantine_on_campus - prior.quarantine_on_campus}
                        link="/quarantineoncampus"
                    />
                    <Card
                        name="Off Campus"
                        latest={latest.quarantine_off_campus}
                        diff={latest.quarantine_off_campus - prior.quarantine_off_campus}
                        link="/quarantineoffcampus"
                    />
                </div>
            </div>
            <br />
            <div id="isolation">
                <h4 className="text-2xl">Number of Students in Isolation</h4>
                <h5 className="text-base">
                    Isolation separates sick people with a contagious disease from people who are not sick.
                </h5>
                <div className="Section">
                    <Card
                        name="On Campus"
                        latest={latest.isolation_on_campus}
                        diff={latest.isolation_on_campus - prior.isolation_on_campus}
                        link="isolationoncampus"
                    />
                    <Card
                        name="Off Campus"
                        latest={latest.isolation_off_campus}
                        diff={latest.isolation_off_campus - prior.isolation_off_campus}
                        link="isolationoffcampus"
                    />
                </div>
            </div>
            <br />
            <div id="tests">
                <h4 className="text-2xl">Tests</h4>
                <div className="Section">
                    <Card
                        name="Tests Administered"
                        latest={latest.tests_administered}
                        diff={latest.tests_administered - prior.tests_administered}
                        link="/tests"
                    />
                </div>
            </div>
            <br />
            <div id="beds">
                <h4 className="text-2xl">Quarantine/Isolation Bed Availability On-campus</h4>
                <div className="Section">
                    <Card
                        name="Beds Available"
                        latest={latest.beds_available + "%"}
                        diff={latest.beds_available - prior.beds_available + "%"}
                        suffix="%"
                        link="/beds"
                    />
                </div>
            </div> */}
            <GoatCounter />
        </>
    );
};

export default MainPage;
