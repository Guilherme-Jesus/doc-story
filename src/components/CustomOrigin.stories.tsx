import { ComponentMeta, ComponentStory } from "@storybook/react";
import CustomOrigin from "./CustomOrigin";


export default{
    title: 'Edit/Blocks',
    component: CustomOrigin,
} as ComponentMeta<typeof CustomOrigin>

 
export const Template: ComponentStory<typeof CustomOrigin> = () => <CustomOrigin  />

export const EditData = Template.bind({})
EditData.args =  {
    "blockId": "C19",
    "name": "Pedro Merola - Santa Fé (P) (S)",
    "abrv": "Ped",
    "blockParent": "0",
}


// export const Default = () => <CustomOrigin/>