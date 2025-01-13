import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import 'react-tabs/style/react-tabs.css';
import Overview from "../../sections/Overview";

const HomeTabs = () => {
    return (
        <section className="w-11/12 mx-auto">
            <Tabs>
            <TabList className={"tabs"}>
                <Tab role="tab" className="tab">Overview</Tab>
                <Tab role="tab" className="tab">Packages</Tab>
                <Tab role="tab" className="tab">Tour Guides</Tab>
            </TabList>
        

        <TabPanel>
           <Overview/>
        </TabPanel>

        <TabPanel>
            <p>packages</p>
        </TabPanel>
        <TabPanel>
            <p>guides</p>
        </TabPanel>
        </Tabs>
        </section>
    );
};

export default HomeTabs;