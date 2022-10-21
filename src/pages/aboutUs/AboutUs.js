

import Title from "../../components/title/Title";

function AboutUs (props){
  return(
    <>
      <Title
        title={props.text.title}
        subtitle={props.text.subtitle}
      />
    </>
  )
}
export default AboutUs;