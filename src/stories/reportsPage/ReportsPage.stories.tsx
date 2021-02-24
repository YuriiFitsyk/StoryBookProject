/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { ReportsPage } from "./ReportsPage";

export default {
  component: ReportsPage,
  title: "ReportsPage",
  args: {},
  argTypes: {},
};

const ReportsPageStory = ({ ...args }) => <ReportsPage {...args} />;

export const Basic = ReportsPageStory.bind({});
