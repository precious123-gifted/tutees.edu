import React, { useContext, useEffect } from 'react'

import {AppContext} from '../../App.jsx'
import { useRef } from 'react'
import { BlogStyle } from './blog.styled.jsx'
import logo from '../../assets/logo.png'
import girlNsky from '../../assets/girlNsky.jpg'
import eductedHurry from '../../assets/educated.jpg'
import humbleLeader from '../../assets/humbleleader.jpg'
import learner from '../../assets/learning.jpg'
import KWHLAQ from '../../assets/KWHLAQ.jpg'






export default function Blog() {

  const{blog}=useContext(AppContext)
const{setBlog}=useContext(AppContext)
const{home}=useContext(AppContext)
const{setHome}=useContext(AppContext)

const Blog = useRef(null)


  return (
   
<BlogStyle ref ={Blog}>

<div className="logo-div">
  <img src={logo} alt="" srcset=""  width={'15%'}/>
</div>
<div className="content">

<div className="display">

<div className="section1">
  <div className="girl-and-sky" style={{marginBottom: '100px'}}>
<img src={girlNsky} alt="" srcset="" width={'80%' } style={{borderRadius: '30px'}}/>
<h1>UNDER A BROODING SKY</h1>
<p style={{lineHeight :'22px',}}>UNDER a brooding sky, the motor of the single-engine airplane roared as the small craft gathered 
  speed and lifted off the runway. It had been a media event, with news coverage, cameras pointing, 
  and reporters asking admiring questions and gushing with compliments. Who was attracting all this 
  attention? Not the only licensed pilot aboard the plane and not the lone passenger​—an adult male—​but,
   rather, the passenger’s daughter. She was seven years old.


The little girl was to fly the plane. There was a record of some kind to be broken 
and a tight schedule to be met. The media would be waiting at the next stop. So despite
 the gloomy weather, the three climbed aboard, with the child sitting on a cushion so 
 that she could see over the instrument panel and using extenders so that her feet could 
 reach the floor pedals.


The flight was all too brief. Facing a sudden storm, the plane veered, stalled, and crashed, 

killing all three aboard. The media suddenly trumpeted grief instead of praise. A few reporters
 and editors wondered whether the media had played a role in the tragedy. Many people began 
 to insist that no child should fly a plane. In the United States, laws were enacted to that 
 effect. But behind the sensationalism and simple solutions lurked deeper issues.


That tragedy made some people think seriously about a trend of our times. Children today are 
being hurried through childhood,  rushed into taking on adult tasks at a very early age. Granted, 
the effects are not always so dramatic or so tragic. But they can be profound and long lasting.
 Let us consider a few of the ways in which childhood can be rushed.</p>
</div>


<div className="educated-in-a-hurry">
<img src={eductedHurry} alt="" srcset="" width={'80%' } style={{borderRadius: '30px'}}/>
<h1>EDUCATED IN A HURRY</h1>
<p style={{lineHeight :'22px',}} >
Parents are understandably eager to see their children succeed. But when that eagerness turns into anxiety,
 parents may overload their children, pushing them too hard, too soon. The process often starts innocently enough. 
Of course, it is not wrong to encourage a child’s talents or interests. But is there a danger of excess? Clearly 
there is when some children seem to have almost as many pressures as harried adults do. Time magazine notes: “Kids 
who once had childhoods now have curriculums; kids who ought to move with the lunatic energy of youth now move with 
the high purpose of the worker bee.”

David Elkind, author of the book The Hurried Child, notes that schools tend to label children too quickly and too early.
 They do so, Elkind argues, for management reasons rather than for reasons related to the effective teaching of children.

Is there a price for pressuring children to become, in effect, competent little adults before their time? Elkind is troubled
 by the way society has embraced the notion of making children competent to carry adult burdens. He says: “It reflects our
  tendency to accept the increasing and  unrelenting stresses on today’s young people as ‘normal.’” Indeed, notions of what
   is normal for children seem to be changing rapidly.
</p>
</div>


<div className="ask-your-self">
<h1>ASK YOUR SELF</h1>
<p style={{lineHeight :'22px',}} >
"How do I rate my child's moral, mental and emotional development? How has this prepared him/her to 
face the world and it's attendant challenges?

What can I do to intervene?"

We recommend the RIGHT EDUCATION for your child/ward. This aims to harness each child's 
unique potentials.
 This also detracts from the popular form of education today that prepares children to be
  competitive rather than their best.
<h4>
Their future is important. CONTACT US For Your Children's:
</h4>
<ul>
  <li>EDUCATIONAL NEEDS INTERVENTION </li>
  <li> EDUCATIONAL CHALLENGES INTERVENTIONS and</li>
  <li>GUIDANCE and COUNSELING SERVICES. </li>
  <li>This is the best legacy you can bequeath to your child.</li>
</ul>

</p>


</div>


  </div>
<div className="section2">
  <div className="principal-reflexion">
    <h1>A Principal`s Reflection</h1>
    <p style={{lineHeight :'22px',}}>
      <h3>Humble Leadership </h3>
      Suppose you were to research or Google the qualities of effective leaders. In that case, all you would come up with are the typical characteristics such as good communication, ability to make difficult decisions, having a vision, models, and listening intently, to name a few. What doesn’t show up in routine searches is humility. There is a strong link between this trait and effective leadership. Jeff Hyman shared the following in a Forbes article:

    A number of research studies have concluded that humble leaders listen more effectively, inspire great teamwork and focus everyone (including themselves) on organizational goals better than leaders who don’t score high on humility. Case in point: A survey of 105 computer software and hardware firms published in the Journal of Management revealed that humility in CEOs led to higher-performing leadership teams, increased collaboration and cooperation and flexibility in developing strategies.

Humble leaders are able to get the most out of people through intrinsic means, which often leads to lasting change and a positive culture. Here is another bit from the Forbes piece referenced above:

    Humble leaders understand that they are not the smartest person in every room. Nor do they need to be. They encourage people to speak up, respect differences of opinion and champion the best ideas, regardless of whether they originate from a top executive or a production-line employee. When a leader works to harness input from everyone, it carries through the organization. As other executives and line managers emulate the leader’s approach, a culture of getting the best from every team and every individual takes root.

So how does one become a humble leader? The first step is understanding who you are and how your actions might be perceived or impact others, something I dive into deeply in Digital Leadership. Humility is characterized by a low focus on the self and an honest assessment of one’s worth and accomplishments. It also requires an acknowledgment of one’s imperfections, limitations, mistakes, shortcomings, and other areas of growth. You basically need to understand who you are.

<h4>Humble leaders are highly effective because they:</h4>

<ul>
   <li> Earn trust</li>
    <li> Use an equitable lens</li>
   <li>Treat everyone with respect</li> 
   <li>Encourage teamwork</li> 
   <li>Admit mistakes</li> 
   <li>Foster a culture of learning</li> 
</ul>

<img src={humbleLeader} alt="" srcset="" width={'100%' } style={{borderRadius: '30px'}}/>
Although this is a common misconception, being humble does not mean you are weak. While some
 might see humility as a weakness, it is possibly the most significant asset a leader can yield.
  You don’t need to have all the answers. Instead, you must know where to find them, or better yet,
   leverage your people as a means to build capacity. Humility means you trust the people who you 
   work with, delegate when necessary, and provide feedback to spur growth. Sometimes you might need 
   to evolve into a humble leader and daily reflection is critical using a window and mirror approach.
    In the words of C.S. Lewis, “Humility is not thinking less of yourself, it’s thinking of yourself less.”
    </p>
  </div>

  <div className="principal-reflexion">
    <h1>Taking Learners Deeper with Reflection </h1>
    <p style={{lineHeight :'22px',}}>
      <h3> “We do not learn from experience. We learn from reflecting on experience.” – John Dewey </h3>
     

The quote above from Dewey has always resonated with me, especially when I am outside doing 
 in Texas. In the past, I used to often get stung by bees and wasps. There is a difference 
 between the two species and how they sting. Some of them actually bite. While each encounter
  resulted in a painful experience, they also provided a valuable opportunity for me to reflect
   on why I was susceptible to stings and how to avoid them. I always learned to wear long-sleeved 
   shirts and observe my surroundings to spot their nests. I also habitually tracked them when
    they were seen flying around the same areas, which allowed me to find their nests and take 
    them out. The bottom line is that I have not been stung in a long time.

It goes without saying that experience plays a pivotal role in learning for students and adults.
 In Disruptive Thinking in Our Classrooms, I shared the need to provide more opportunities for this 
 in lessons as well as specific strategies that can be used. When reflection is added, it helps to 
 improve the connection between what has been experienced and the outcomes that were derived. 
 The case can be made that it allows learners to go deeper into concepts while becoming 
 more competent.

    Reflection is not a simple process of introspection. Instead, it is an evidence-based, integrative,
     analytical, capacity-building approach that serves to generate, deepen, critique, and document 
     learning. Developing reflective skills is central to students’ academic and professional 
     development within a discipline. The ability to reflect on one’s practice when confronted by a novel, 
     unusual, or complex situation distinguishes expert practitioners from novices (Schön, 1983).

<h4>Routine reflection can:</h4>

<ul>
   <li> Foster cognitive flexibility</li>
    <li>Aid in the construction and understanding of new knowledge</li>
   <li>Establish links between academic, emotional, and social experiences</li> 
   <li>Develop essential competencies for success in a disruptive world</li> 
   
</ul>

<img src={learner} alt="" srcset="" width={'100%' } style={{borderRadius: '30px'}}/>
<h4>The outcomes listed above are supported by research:</h4>
Research has found that learning from direct experience can be more effective if coupled 
with reflection—that is, the intentional attempt to synthesize, abstract, and articulate the 
key lessons taught by experience. Additionally, the effect of reflection on learning is 
mediated by a greater perceived ability to achieve a goal resulting in self-efficacy.
Intentionality is key. The good news is that educators do not have to reinvent the wheel.
 When it comes to reflection in the classroom, the key is to make the time for it through
  alignment with routine pedagogy. Naturally, there is a tendency to include this at the end
   in the form of closure using the following prompts that can be answered using text, video,
    or audio:

<ul>
  <li>What did you learn of value today?</li>
  <li>How might you apply what you learned outside of the classroom?</li>
  <li>Why was this learning important to you and your peers?</li>
</ul>
However, educators can integrate opportunities to reflect throughout a lesson. I shared the 
following KWHLAQ chart in Disruptive Thinking, which educators can adapt as needed.

<img src={KWHLAQ} alt="" srcset="" width={'120%' } style={{borderRadius: '20px'}}/>

Reflection as a part of learning is something that must be cultivated in the classroom and beyond. 
We can’t assume that students are familiar with this process. Thus, they can benefit from guidance 
to help them derive meaning from experience. Without this support, reflections may be limited to 
descriptive accounts of an experience or “venting of feelings” (Ash & Clayton, 2009). Experience, 
when reflected upon, is the best teacher.


    </p>
  </div>


</div>

</div>
</div>

<nav style={{width:'100vw',height:'300px',backgroundColor : '#CDDED6',paddingBottom:'50px'}}>
<h2>Any question or feedback?</h2>

<h4>send us a message</h4>
<form action="">
<textarea name="feedback" id="" cols="30" rows="10" style={{outline:'none',width:'60vw',resize:'none',fontSize:'16px',
border:'none',borderRadius:'10px',padding:'10px'}}></textarea>
<input type="button" value="Send" style={{border:'none',width:'80px',borderRadius:'10px',height:'30px',
color:'white',backgroundColor:'#2c5a44'}} />
</form>
</nav>



</BlogStyle>
  )
}
