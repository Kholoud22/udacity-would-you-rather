(this["webpackJsonpwhould-you-rather"]=this["webpackJsonpwhould-you-rather"]||[]).push([[0],{87:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(21),o=a.n(s),c=a(17),i=a(18),d=(a(86),a(87),a(14)),u=a(24),j=a(25),l=a(27),h=a(26),b=a(22),p=a.n(b),O=a(13),x=a(69),m=a(5),v={sarahedo:{id:"sarahedo",name:"Sarah Edo",avatarURL:"https://i.pravatar.cc/150?u=a042581f4e29026704d",answers:{"8xf0y6ziyjabvozdd253nd":"optionOne","6ni6ok3ym7mf1p33lnez":"optionTwo",am8ehyc8byjqgar0jgpub9:"optionTwo",loxhs1bqm25b708cmbf3g:"optionTwo"},questions:["8xf0y6ziyjabvozdd253nd","am8ehyc8byjqgar0jgpub9"]},tylermcginnis:{id:"tylermcginnis",name:"Tyler McGinnis",avatarURL:"https://i.pravatar.cc/150?u=a042581f4e29026704ad",answers:{vthrdm985a262al8qx3do:"optionOne",xj352vofupe1dqz9emx13r:"optionTwo"},questions:["loxhs1bqm25b708cmbf3g","vthrdm985a262al8qx3do"]},johndoe:{id:"johndoe",name:"John Doe",avatarURL:"https://i.pravatar.cc/150?u=a042581f4e29026704az",answers:{xj352vofupe1dqz9emx13r:"optionOne",vthrdm985a262al8qx3do:"optionTwo","6ni6ok3ym7mf1p33lnez":"optionTwo"},questions:["6ni6ok3ym7mf1p33lnez","xj352vofupe1dqz9emx13r"]}},f={"8xf0y6ziyjabvozdd253nd":{id:"8xf0y6ziyjabvozdd253nd",author:"sarahedo",timestamp:1467166872634,optionOne:{votes:["sarahedo"],text:"have horrible short term memory"},optionTwo:{votes:[],text:"have horrible long term memory"}},"6ni6ok3ym7mf1p33lnez":{id:"6ni6ok3ym7mf1p33lnez",author:"johndoe",timestamp:1468479767190,optionOne:{votes:[],text:"become a superhero"},optionTwo:{votes:["johndoe","sarahedo"],text:"become a supervillain"}},am8ehyc8byjqgar0jgpub9:{id:"am8ehyc8byjqgar0jgpub9",author:"sarahedo",timestamp:1488579767190,optionOne:{votes:[],text:"be telekinetic"},optionTwo:{votes:["sarahedo"],text:"be telepathic"}},loxhs1bqm25b708cmbf3g:{id:"loxhs1bqm25b708cmbf3g",author:"tylermcginnis",timestamp:1482579767190,optionOne:{votes:[],text:"be a front-end developer"},optionTwo:{votes:["sarahedo"],text:"be a back-end developer"}},vthrdm985a262al8qx3do:{id:"vthrdm985a262al8qx3do",author:"tylermcginnis",timestamp:1489579767190,optionOne:{votes:["tylermcginnis"],text:"find $50 yourself"},optionTwo:{votes:["johndoe"],text:"have your best friend find $500"}},xj352vofupe1dqz9emx13r:{id:"xj352vofupe1dqz9emx13r",author:"johndoe",timestamp:1493579767190,optionOne:{votes:["johndoe"],text:"write JavaScript"},optionTwo:{votes:["tylermcginnis"],text:"write Swift"}}};var y="SET_AUTHED_USER",g="USER_ANSWERED_QUESTION",w="USER_ADD_QUESTION",q="RECEIVE_USERS",U="RECEIVE_QUESTIONS",R="ADD_QUESTION",T="ANSWER_QUESTION";function k(e){return{type:y,data:{userId:e}}}function E(){return function(e){return e(Object(b.showLoading)()),Promise.all([new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},v))}),1e3)})),new Promise((function(e,t){setTimeout((function(){return e(Object(m.a)({},f))}),1e3)}))]).then((function(e){var t=Object(x.a)(e,2);return{users:t[0],questions:t[1]}})).then((function(t){var a=t.users,n=t.questions;e(function(e){return{type:q,data:{users:e}}}(a)),e(function(e){return{type:U,data:{questions:e}}}(n)),e(k("")),e(Object(b.hideLoading)())}))}}var S=a(139),C=a(142),L=a(126),z=a(141),N=a(144),A=a(140),I=a(2),D=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={authedUser:""},e.handleChange=function(t){e.setState({authedUser:t.target.value}),e.props.setAuthedUser(t.target.value),e.props.history.push("/")},e}return Object(j.a)(a,[{key:"render",value:function(){var e=this.props.usersPayload,t=this.state.authedUser;return Object(I.jsx)("div",{className:"container",style:{height:"100vh",display:"flex",justifyContent:"center",alignItems:"center"},children:Object(I.jsxs)(A.a,{style:{boxShadow:"5px 5px cadetblue",border:"1px solid",padding:"10px"},children:[Object(I.jsx)("h1",{children:"Would You rather app"}),Object(I.jsx)(A.a.Body,{children:Object(I.jsxs)(z.a,{children:[Object(I.jsx)(N.a,{children:"Login"}),Object(I.jsx)(C.a,{"aria-label":"Login",name:"login",value:t,onChange:this.handleChange,children:e&&e.map((function(e){return Object(I.jsx)(L.a,{value:e.id,control:Object(I.jsx)(S.a,{}),label:e.name},e.id)}))})]})})]})})}}]),a}(n.Component),Q=Object(O.e)(Object(c.connect)((function(e){var t=e.users;return{usersPayload:Object.values(t).map((function(e){return{avatarURL:e.avatarURL,id:e.id,name:e.name}}))}}),(function(e){return{setAuthedUser:function(t){return e(k(t))}}}))(D)),P=a(127),_=a(128),W=a(129),B=a(130),K=a(131),J=a(49),M=a.n(J),V=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){console.log("here",this.props)}},{key:"render",value:function(){var e=this.props.leaderboardPayload;return Object(I.jsxs)(P.a,{children:[Object(I.jsx)("h1",{children:"Leaderboard"}),Object(I.jsx)(_.a,{children:e&&e.map((function(e){return Object(I.jsxs)("div",{className:"col-4",style:{border:"1px solid cadetblue",boxShadow:"2px 2px cadetblue",margin:"10px",maxWidth:"300px"},children:[Object(I.jsxs)(_.a,{children:[Object(I.jsx)(W.a,{sm:12,className:"p-0",children:Object(I.jsx)(B.a,{src:e.avatarURL,style:{width:"inherit"}})}),Object(I.jsx)(W.a,{children:Object(I.jsx)("h3",{children:e.name})})]}),Object(I.jsxs)(_.a,{children:[Object(I.jsxs)(W.a,{sm:8,style:{borderRight:"1px solid cadetblue"},children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("h6",{children:"Questions Created: "}),e.questionsCreatedCount]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h6",{children:"Questions Answered: "}),e.answersCount]})]}),Object(I.jsx)(W.a,{sm:4,className:"m-auto",children:Object(I.jsx)(K.a,{disabled:!0,className:"rounded-circle",style:{maxWidth:"45px",background:"cadetblue",border:"none"},children:e.score})})]})]},e.id)}))})]})}}]),a}(n.Component),H=Object(O.e)(Object(c.connect)((function(e){var t=e.users;return{leaderboardPayload:Object.values(t).map((function(e){return{avatarURL:e.avatarURL,id:e.id,name:e.name,answersCount:Object.values(e.answers).length,questionsCreatedCount:e.questions.length,score:Object.values(e.answers).length+e.questions.length}})).sort(M()("-score"))}}))(V)),$=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:""},e.redirect=function(){e.props.users[e.props.authedUser]?e.setState({currentUser:e.props.users[e.props.authedUser]}):e.props.history.push("/login")},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.redirect()}},{key:"render",value:function(){var e=this;return Object(I.jsx)(P.a,{children:Object(I.jsxs)(_.a,{children:[Object(I.jsx)(W.a,{children:Object(I.jsxs)("div",{lg:"auto",children:[Object(I.jsx)(B.a,{src:this.state.currentUser.avatarURL,style:{width:"auto",height:35,marginRight:"30px",borderRadius:"5pc"}}),this.state.currentUser.name]})}),Object(I.jsx)(W.a,{lg:"auto",children:Object(I.jsx)(i.c,{to:"/",children:"Home"})}),Object(I.jsx)(W.a,{lg:"auto",children:Object(I.jsx)(i.c,{to:"/add",children:"New Question"})}),Object(I.jsx)(W.a,{lg:"auto",children:Object(I.jsx)(i.c,{to:"/leaderboard",children:"Leader Board"})}),Object(I.jsx)(W.a,{lg:"auto",children:Object(I.jsx)(K.a,{variant:"danger",onClick:function(t){t.preventDefault(),e.props.setAuthedUser(null),e.props.history.push("/login")},children:"Logout"})})]})})}}]),a}(r.a.Component),F=Object(O.e)(Object(c.connect)((function(e){return{authedUser:e.authedUser,users:e.users}}),(function(e){return{setAuthedUser:function(t){return e(k(t))}}}))($)),G=a(132),Y=a(143),X=a(133),Z=a(134),ee=a(100),te=a(135),ae=a(136),ne=a(6),re=a.n(ne),se=Object(G.a)((function(e){return{title:{color:e.palette.secondary.main}}})),oe=function(e){var t=e.id,a=e.avatarURL,n=e.author,r=e.optionOne,s=e.optionTwo,o=se();return Object(I.jsxs)(Y.a,{variant:"outlined",children:[Object(I.jsx)(X.a,{children:Object(I.jsxs)(Z.a,{container:!0,children:[Object(I.jsx)(Z.a,{item:!0,md:2,children:Object(I.jsx)("img",{src:a,alt:"".concat(n," avatar"),width:"120px"})}),Object(I.jsxs)(Z.a,{item:!0,md:10,children:[Object(I.jsxs)(ee.a,{gutterBottom:!0,children:[Object(I.jsx)("span",{className:o.title,children:n})," asks Would you rather"]}),Object(I.jsx)(ee.a,{color:"textSecondary",children:r.text}),Object(I.jsxs)(ee.a,{color:"textSecondary",children:[s.text,"?"]})]})]})}),Object(I.jsx)(te.a,{children:Object(I.jsx)(i.b,{to:"/question/".concat(t),style:{width:"100%"},children:Object(I.jsx)(ae.a,{type:"submit",fullWidth:!0,variant:"contained",color:"secondary",children:"View Question"})})})]})};oe.protoTypes={id:re.a.string.isRequired,avatarURL:re.a.string.isRequired,author:re.a.string.isRequired,optionOne:re.a.shape({votes:re.a.array.isRequired,text:re.a.string.isRequired}).isRequired,optionTwo:re.a.array.isRequired};var ce=oe,ie=a(137),de=a(138),ue=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={value:0},e.handleChange=function(t,a){e.setState({value:a})},e.formatQuestions=function(t){return t.map((function(t){return{author:e.props.questions[t].author,id:t,optionOne:e.props.questions[t].optionOne,optionTwo:e.props.questions[t].optionTwo,timestamp:e.props.questions[t].timestamp,avatarURL:e.props.users[e.props.questions[t].author].avatarURL}})).sort(M()("-timestamp"))},e}return Object(j.a)(a,[{key:"render",value:function(){this.state.value;var e=this.props,t=e.questions,a=e.authedUser,r=Object.keys(t).filter((function(e){return t[e].optionOne.votes.includes(a)||t[e].optionTwo.votes.includes(a)})),s=Object.keys(t).filter((function(e){return!t[e].optionOne.votes.includes(a)&&!t[e].optionTwo.votes.includes(a)}));return Object(I.jsxs)(P.a,{children:[Object(I.jsx)("h1",{children:"Dashboard"}),Object(I.jsx)(ie.a.Container,{id:"left-tabs-example",defaultActiveKey:"first",children:Object(I.jsxs)(_.a,{children:[Object(I.jsx)(W.a,{sm:"auto",children:Object(I.jsxs)(de.a,{variant:"pills",className:"flex-column",children:[Object(I.jsx)(de.a.Item,{children:Object(I.jsxs)(de.a.Link,{eventKey:"first",children:["Unanswered Questions ",s.length]})}),Object(I.jsx)(de.a.Item,{children:Object(I.jsxs)(de.a.Link,{eventKey:"second",children:["Answered Questions ",r.length]})})]})}),Object(I.jsx)(W.a,{children:Object(I.jsxs)(ie.a.Content,{children:[Object(I.jsx)(ie.a.Pane,{eventKey:"first",children:s&&this.formatQuestions(s).map((function(e){return Object(n.createElement)(ce,Object(m.a)(Object(m.a)({},e),{},{key:e.id}))}))}),Object(I.jsx)(ie.a.Pane,{eventKey:"second",children:r&&this.formatQuestions(r).map((function(e){return Object(n.createElement)(ce,Object(m.a)(Object(m.a)({},e),{},{key:e.id}))}))})]})})]})})]})}}]),a}(n.Component),je=Object(O.e)(Object(c.connect)((function(e){var t=e.users;return{questions:e.questions,users:t,authedUser:e.authedUser}}))(ue)),le=function(e){Object(l.a)(a,e);var t=Object(h.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.handleInitialData(),console.log(this.props)}},{key:"render",value:function(){var e;return Object(I.jsxs)(n.Fragment,{children:[Object(I.jsx)(p.a,{}),Object(I.jsx)("div",{className:"container",children:this.props.authedUser?Object(I.jsxs)("div",{children:[Object(I.jsx)(F,{}),Object(I.jsx)(O.a,(e={exact:!0,path:"/"},Object(d.a)(e,"exact",!0),Object(d.a)(e,"component",je),e)),Object(I.jsx)(O.a,{path:"/leaderboard",exact:!0,component:H})]}):Object(I.jsx)(O.a,{path:"/login",exact:!0,component:Q})})]})}}]),a}(n.Component),he=Object(c.connect)((function(e){return{authedUser:e.authedUser}}),(function(e){return{handleInitialData:function(){return e(E())}}}))(le),be=a(36),pe=a(68),Oe=a(52);var xe=Object(be.b)({questions:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return Object(m.a)(Object(m.a)({},e),t.data.questions);case R:var a=t.data.question;return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},a.id,a));case T:var n=t.data,r=n.authedUser,s=n.qid,o=n.answer,c=e[s][o];return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},s,Object(m.a)(Object(m.a)({},e[s]),{},Object(d.a)({},o,Object(m.a)(Object(m.a)({},c),{},{votes:[].concat(Object(Oe.a)(c.votes),[r])})))));default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return Object(m.a)(Object(m.a)({},e),t.data.users);case w:var a=t.data.authedUser,n=t.data.qid;return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},a,Object(m.a)(Object(m.a)({},e[a]),{},{questions:[].concat(Object(Oe.a)(e[a].questions),[n])})));case g:return Object(m.a)(Object(m.a)({},e),{},Object(d.a)({},t.data.authedUser,Object(m.a)(Object(m.a)({},e[t.data.authedUser]),{},{answers:Object(m.a)(Object(m.a)({},e[t.data.authedUser].answers),{},Object(d.a)({},t.data.qid,t.data.answer))})));default:return e}},authedUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:var a=t.data.userId;return a;default:return e}},loadingBar:b.loadingBarReducer}),me=[pe.a],ve=Object(be.d)(xe,{},Object(be.c)(be.a.apply(void 0,me)));o.a.render(Object(I.jsx)(c.Provider,{store:ve,children:Object(I.jsx)(i.a,{children:Object(I.jsx)(he,{})})}),document.getElementById("root"))}},[[99,1,2]]]);
//# sourceMappingURL=main.a39fc5ce.chunk.js.map