// Owner-review copy registry. Keep display wording separate from business actions/state.
const MPS_UI_COPY = Object.freeze({
  applicationFamilyWithdrawalAction: 'Family withdrew'
});

const ORG = 'Malithi International Preschool';
const storageKey = 'mpsPrototypeProductV3';
const TODAY = '2026-09-14';

function seedDB(){
  return {
    ui:{route:'today',persona:'anjali',admissionsCase:'amaya',admissionsTab:'overview',lessonClass:'baby',lessonWeek:'2026-09-14',lessonTab:'week',healthTab:'updates',mediaTab:'private',modal:null,drawer:null,parentApplicationCase:null,parentApplicationStep:1,parentOnboardingCase:null,parentOnboardingStep:1,searchResults:[]},
    personas:{
      anjali:{id:'anjali',name:'Anjali Fernando',initials:'AF',bundles:['Head Teacher','Class Teacher','Admissions','Daycare'],scope:'Baby Class'},
      rashmi:{id:'rashmi',name:'Rashmi Silva',initials:'RS',bundles:['Accounts'],scope:'Billing'},
      maya:{id:'maya',name:'Maya Fernando',initials:'MF',bundles:['Social Media'],scope:'Approved MarketingAssets only'},
      sajana:{id:'sajana',name:'Sajana Jayathissa',initials:'SJ',bundles:['System Administration'],scope:'Organisation'},
      priya:{id:'priya',name:'Priya Perera',initials:'PP',bundles:['Class Teacher'],scope:'Baby Class'}
    },
    admissions:{
      mihira:{id:'mihira',childName:'Mihira Ranasinghe',dob:'2024-04-05',guardian:'Chathuri Ranasinghe',phone:'070 331 8821',start:'2027-01-19',service:'Baby Class',source:'Walk-in / Signboard',reason:'Location / convenience',events:[ev('enquiry','Enquiry created','Walk-in / Signboard')],tour:null,application:{status:'not_sent',draft:null,snapshot:null},fee:null,enrolment:null,onboarding:null,closed:null},
      amaya:{id:'amaya',childName:'Amaya Perera',dob:'2024-03-14',guardian:'Nadeesha Perera',phone:'077 234 5678',start:'2027-01-05',service:'Baby Class + Standard Daycare',source:'Facebook',reason:'Educational approach / play-based learning',events:[ev('enquiry','Enquiry created','Facebook'),ev('qualified','Marked Qualified Lead',''),ev('tour','Tour completed','Family wants to proceed'),ev('application_sent','Application link sent','Secure WhatsApp link'),ev('application_submitted','Application submitted','Parent confirmed details'),ev('accepted','Application accepted','Baby Class · 05 Jan 2027'),ev('fee_invoice','Admission-fee invoice issued','LKR 15,000')],tour:{status:'completed',date:'2026-09-10',time:'10:00',outcome:'Family wants to proceed'},application:{status:'accepted',draft:{childName:'Amaya Perera',dob:'2024-03-14',guardian:'Nadeesha Perera',phone:'077 234 5678',service:'Baby Class + Standard Daycare',start:'2027-01-05',note:'Extended daycare may be needed later.'},snapshot:null},fee:{amount:15000,due:'2026-09-19',verified:5000,pending:[{id:'admp2',amount:10000,method:'Bank transfer',reference:'NP-ADM-10000',status:'pending'}],status:'pending'},enrolment:null,onboarding:null,closed:null},
      senuri:{id:'senuri',childName:'Senuri Peris',dob:'2023-11-02',guardian:'Tharushi Peris',phone:'071 442 9011',start:'2027-01-05',service:'Upper Class',source:'Google / Search',reason:'Head Teacher / teaching quality',events:[ev('enquiry','Enquiry created','Google / Search'),ev('qualified','Marked Qualified Lead',''),ev('tour','Tour completed',''),ev('application_sent','Application link sent',''),ev('application_submitted','Application submitted',''),ev('accepted','Application accepted','Upper Class'),ev('fee_invoice','Admission-fee invoice issued','LKR 15,000'),ev('fee_overdue','Admission fee became overdue','Due 10 Sep 2026')],tour:{status:'completed',date:'2026-09-04',time:'09:30',outcome:'Family wants to proceed'},application:{status:'accepted',draft:{childName:'Senuri Peris',dob:'2023-11-02',guardian:'Tharushi Peris',phone:'071 442 9011',service:'Upper Class',start:'2027-01-05',note:''},snapshot:null},fee:{amount:15000,due:'2026-09-10',verified:0,pending:[],status:'overdue'},enrolment:null,onboarding:null,closed:null},
      nethmi:{id:'nethmi',childName:'Nethmi Silva',dob:'2024-01-23',guardian:'Dilani Silva',phone:'076 890 1142',start:'2027-01-12',service:'Baby Class + Extended Daycare',source:'WhatsApp',reason:'Extended daycare / operating hours',events:[ev('enquiry','Enquiry created','WhatsApp'),ev('qualified','Marked Qualified Lead',''),ev('tour','Tour completed','Family wants to proceed')],tour:{status:'completed',date:'2026-09-12',time:'11:00',outcome:'Family wants to proceed'},application:{status:'not_sent',draft:{childName:'Nethmi Silva',dob:'2024-01-23',guardian:'Dilani Silva',phone:'076 890 1142',service:'Baby Class + Extended Daycare',start:'2027-01-12',note:'Both guardians work full time.'},snapshot:null},fee:null,enrolment:null,onboarding:null,closed:null},
      thehan:{id:'thehan',childName:'Thehan Wijesinghe',dob:'2022-05-21',guardian:'Madhavi Wijesinghe',phone:'075 124 8899',start:'2027-01-05',service:'Upper Class',source:'Existing-family referral',reason:'Reputation / recommendation / preschool legacy',events:[ev('enquiry','Enquiry created','Existing-family referral'),ev('qualified','Marked Qualified Lead',''),ev('tour','Tour completed',''),ev('application_sent','Application link sent',''),ev('application_submitted','Application submitted','Parent submitted 13 Sep')],tour:{status:'completed',date:'2026-09-08',time:'10:30',outcome:'Family wants to proceed'},application:{status:'submitted',draft:{childName:'Thehan Wijesinghe',dob:'2022-05-21',guardian:'Madhavi Wijesinghe',phone:'075 124 8899',service:'Upper Class',start:'2027-01-05',note:'No additional note.'},snapshot:{submittedAt:'2026-09-13T18:00',data:{childName:'Thehan Wijesinghe'}}},fee:null,enrolment:null,onboarding:null,closed:null},
      imani:{id:'imani',childName:'Imani de Alwis',dob:'2024-02-17',guardian:'Shanika de Alwis',phone:'077 551 3320',start:'2027-01-05',service:'Baby Class',source:'Website',reason:'Educational approach / play-based learning',events:[ev('enquiry','Enquiry created','Website'),ev('qualified','Marked Qualified Lead',''),ev('tour','Tour completed',''),ev('application_sent','Application link sent',''),ev('application_submitted','Application submitted',''),ev('accepted','Application accepted',''),ev('fee_verified','Admission fee verified','LKR 15,000'),ev('enrolled','Enrolment created','Baby Class · 05 Jan 2027'),ev('onboarding_sent','New Family Onboarding link sent',''),ev('onboarding_submitted','New Family Onboarding submitted','Parent input awaiting review')],tour:{status:'completed',date:'2026-09-06',time:'09:00',outcome:'Family wants to proceed'},application:{status:'accepted',draft:{childName:'Imani de Alwis',dob:'2024-02-17',guardian:'Shanika de Alwis',phone:'077 551 3320',service:'Baby Class',start:'2027-01-05',note:''},snapshot:null},fee:{amount:15000,due:'2026-09-12',verified:15000,pending:[],status:'satisfied'},enrolment:{status:'active',className:'Baby Class',service:'Preschool',start:'2027-01-05'},onboarding:seedOnboarding('Imani de Alwis','Imani','2024-02-17','Shanika de Alwis','077 551 3320',{submitted:true,healthConfirmed:false}),closed:null}
    },
    attendance:{
      amaya:{id:'amaya',name:'Amaya Perera',className:'Baby Class',status:'present',checkIn:'08:12',checkOut:null,collector:null,corrections:[{from:'08:21',to:'08:12',reason:'Staff selected wrong time during morning rush',by:'Anjali Fernando',at:'08:34'}]},
      imani:{id:'imani',name:'Imani de Alwis',className:'Baby Class',status:'present',checkIn:'08:17',checkOut:null,collector:null,corrections:[]},
      ruvin:{id:'ruvin',name:'Ruvin Bandara',className:'Baby Class',status:'present',checkIn:'08:25',checkOut:null,collector:null,corrections:[]},
      kavindu:{id:'kavindu',name:'Kavindu Silva',className:'Baby Class',status:'absent',checkIn:null,checkOut:null,collector:null,corrections:[]},
      dilan:{id:'dilan',name:'Dilan Jayasinghe',className:'Upper Class',status:'present',checkIn:'08:19',checkOut:null,collector:null,corrections:[],temporaryPickup:{name:'Ayesha Fernando',valid:'Today 16:00–18:00',source:'Registered guardian WhatsApp',reference:'Current reference photo supplied'}},
      minoli:{id:'minoli',name:'Minoli Fernando',className:'Upper Class',status:'present',checkIn:'08:22',checkOut:null,collector:null,corrections:[]}
    },
    daycare:{capacity:8,bookings:{
      amaya:{id:'bk_amaya',childId:'amaya',childName:'Amaya Perera',date:TODAY,care:'Standard Daycare',recurring:true},
      minoli:{id:'bk_minoli',childId:'minoli',childName:'Minoli Fernando',date:TODAY,care:'Extended Daycare',recurring:true},
      dilan:{id:'bk_dilan',childId:'dilan',childName:'Dilan Jayasinghe',date:TODAY,care:'Standard Daycare',recurring:true}
    },careRecords:{},latePickups:{lp1:{id:'lp1',childId:'nethmi',childName:'Nethmi Silva',expected:'17:00',grace:'17:15',actual:'17:28',minutesBeyond:13,amount:200,status:'pending',decisionReason:null}}},
    curriculum:{
      official:{version:'Current Sri Lankan early-childhood framework pack',source:'NIE Teacher Guide',learningAreas:['Health and Physical Wellbeing','Social and Emotional Wellbeing','Language and Early Literacy','Numeracy','Environmental Exploration','Creative Arts']},
      library:{
        colour_sort:{id:'colour_sort',title:'Colour sorting',sourceType:'MPS-provided activity',officialArea:'Numeracy',summary:'Sorting and grouping familiar objects by visible characteristics.',materials:'3 bowls · large safe red/blue/yellow objects'},
        picture_story:{id:'picture_story',title:'Picture-card story prompts',sourceType:'MPS-provided activity',officialArea:'Language and Early Literacy',summary:'Use familiar picture prompts to support vocabulary and simple sequencing.',materials:'Picture cards · story mat'},
        nature_walk:{id:'nature_walk',title:'Nature texture walk',sourceType:'Preschool-created activity',officialArea:'Environmental Exploration',summary:'Explore and describe safe natural textures in the preschool environment.',materials:'Collection basket · safe outdoor objects'},
        music_move:{id:'music_move',title:'Music and movement',sourceType:'MPS-provided activity',officialArea:'Creative Arts',summary:'Respond to rhythm through simple movement and imitation.',materials:'Speaker · scarves'}
      },
      weeks:{
        baby:{
          '2026-09-07':week('07–11 September 2026','Numeracy','Teacher-friendly MPS summary: notice, sort and group familiar objects.',false,{Mon:[planAct('colour_sort','pa_old1')],Tue:[],Wed:[],Thu:[],Fri:[]}),
          '2026-09-14':week('14–18 September 2026','Numeracy','Teacher-friendly MPS summary: sort and group familiar objects by visible characteristics.',false,{Mon:[planAct('colour_sort','pa1')],Tue:[planAct('picture_story','pa2')],Wed:[],Thu:[],Fri:[]}),
          '2026-09-21':week('21–25 September 2026','Environmental Exploration','Teacher-friendly MPS summary: notice and talk about familiar features in the environment.',false,{Mon:[planAct('nature_walk','pa3')],Tue:[],Wed:[],Thu:[],Fri:[]})
        },
        upper:{
          '2026-09-07':week('07–11 September 2026','Language and Early Literacy','Teacher-friendly MPS summary: listen, speak and sequence simple familiar ideas.',true,{Mon:[planAct('picture_story','upa1')],Tue:[],Wed:[],Thu:[],Fri:[]}),
          '2026-09-14':week('14–18 September 2026','Language and Early Literacy','Teacher-friendly MPS summary: extend vocabulary and simple sequencing through stories.',false,{Mon:[planAct('picture_story','upa2')],Tue:[planAct('music_move','upa3')],Wed:[],Thu:[],Fri:[]}),
          '2026-09-21':week('21–25 September 2026','Creative Arts','Teacher-friendly MPS summary: explore rhythm, movement and creative expression.',false,{Mon:[planAct('music_move','upa4')],Tue:[],Wed:[],Thu:[],Fri:[]})
        }
      }
    },
    observations:{obs_seed:{id:'obs_seed',childId:'amaya',childName:'Amaya Perera',date:'2026-09-09',activityTitle:'Story circle',officialArea:'Language and Early Literacy',text:'Amaya joined the repeated phrase and pointed to the matching picture when prompted.',visibility:'Parent-eligible candidate',photo:false,source:'Teaching record'}},
    assessments:{},
    reports:{amaya_sep:{id:'amaya_sep',childId:'amaya',childName:'Amaya Perera',month:'September 2026',status:'teacher_review',selectedEvidence:['obs_seed'],teacherNote:'Amaya is showing growing confidence during small-group learning.',approvedSnapshot:null,sentAt:null}},
    health:{profiles:{amaya:{allergies:'Peanut allergy',instructions:'Avoid peanut exposure; follow current family/medical instructions.'},imani:{allergies:'None recorded',instructions:''}},updates:{hu1:{id:'hu1',childId:'imani',childName:'Imani de Alwis',summary:'New asthma inhaler guidance',status:'pending',submittedBy:'Parent secure update'}},medAuth:{minoli:{id:'ma1',childName:'Minoli Fernando',medication:'Prescribed inhaler',status:'current',instruction:'2 puffs at 14:00 when due',authorisedBy:'Guardian secure authorisation',updated:'2026-09-01'}},administrations:[],incidents:[]},
    billing:{
      invoices:{
        inv1:{id:'inv1',number:'SEP-2026-014',childId:'amaya',childName:'Amaya Perera',status:'issued',issued:'2026-09-01',due:'2026-09-10',lines:[{id:'l1',description:'September preschool fee',amount:12000}],allocations:[{paymentId:'p1',amount:5000}],history:[{at:'01 Sep',text:'Invoice issued · immutable PDF snapshot created'}],evidence:{invoicePdf:'SEP-2026-014.pdf'}},
        inv2:{id:'inv2',number:'SEP-2026-019',childId:'senuri',childName:'Senuri Peris',status:'issued',issued:'2026-09-01',due:'2026-09-10',lines:[{id:'l2',description:'September preschool fee',amount:12000}],allocations:[],history:[{at:'01 Sep',text:'Invoice issued · immutable PDF snapshot created'}],evidence:{invoicePdf:'SEP-2026-019.pdf'}},
        inv3:{id:'inv3',number:'OCT-2026-DRAFT',childId:'nethmi',childName:'Nethmi Silva',status:'draft',issued:null,due:'2026-10-10',lines:[{id:'l3',description:'October preschool fee',amount:12000}],allocations:[],history:[{at:'14 Sep',text:'Monthly draft created'}],evidence:{}}
      },
      payments:{p1:{id:'p1',childId:'amaya',amount:5000,method:'Bank transfer',reference:'NP-SEP-01',status:'verified',verification:'Bank app/account checked',evidence:null},p2:{id:'p2',childId:'amaya',amount:7000,method:'Bank transfer',reference:'NP-SEP-02',status:'pending',verification:null,evidence:'Optional transfer screenshot attached'}},
      pendingCharges:{}
    },
    media:{photos:{
      photo1:{id:'photo1',childIds:['amaya'],title:'Colour sorting · Amaya',visibility:'Parent-eligible candidate',date:'14 Sep',private:true,marketing:{status:'pending',use:'Facebook',decision:null},deletedAt:null,hold:false},
      photo2:{id:'photo2',childIds:['amaya','thehan'],title:'Group outdoor play',visibility:'Internal',date:'14 Sep',private:true,marketing:{status:'blocked',use:'Facebook',decision:'Thehan has Facebook No'},deletedAt:null,hold:false},
      photo3:{id:'photo3',childIds:['imani'],title:'Story circle · Imani',visibility:'Internal',date:'12 Sep',private:true,marketing:{status:'not_nominated',use:null,decision:null},deletedAt:null,hold:false}
    },approvedAssets:{},recycle:{}},
    calendar:{exceptions:{},events:{flags:{id:'flags',title:'International Flags Day',date:'2026-09-14',scope:'Whole preschool',note:'Planning context only'}}},
    staff:{accounts:{
      anjali:{id:'anjali',name:'Anjali Fernando',username:'anjali.fernando',bundles:['Head Teacher','Class Teacher','Admissions','Daycare'],scope:'Baby Class',status:'active'},
      rashmi:{id:'rashmi',name:'Rashmi Silva',username:'rashmi.silva',bundles:['Accounts'],scope:'Billing',status:'active'},
      maya:{id:'maya',name:'Maya Fernando',username:'maya.fernando',bundles:['Social Media'],scope:'Approved MarketingAssets only',status:'active'},
      kamal:{id:'kamal',name:'Kamal Jayasinghe',username:'kamal.jayasinghe',bundles:['Assistant Teacher'],scope:'Historical',status:'inactive'},
      sajana:{id:'sajana',name:'Sajana Jayathissa',username:'sajana.admin',bundles:['System Administration'],scope:'Organisation',status:'active'},
      priya:{id:'priya',name:'Priya Perera',username:'priya.perera',bundles:['Class Teacher'],scope:'Baby Class',status:'active'}
    },history:[]}
  };
}
function ev(type,title,detail=''){return {id:'e_'+Math.random().toString(36).slice(2,9),type,title,detail,at:new Date().toISOString()}}
function seedOnboarding(childName,preferred,dob,guardian,phone,opt={}){
  let submitted=!!opt.submitted;
  let second=guardian.startsWith('Nadeesha')?'Kasun Perera':guardian.startsWith('Shanika')?'Dinesh de Alwis':'Second Guardian';
  let secondPhone=guardian.startsWith('Nadeesha')?'071 555 1190':guardian.startsWith('Shanika')?'071 440 3320':'071 000 0000';
  let isAmaya=childName.startsWith('Amaya'), isImani=childName.startsWith('Imani');
  let draft=submitted?{
    child:{legalName:childName,preferred,dob,gender:'Female',address:'147/A, Galahitiyawa, Ganemulla',languages:['Sinhala','English'],hasSiblings:'Yes',siblings:[{relationship:'Brother',dob:'2020-08-11'}]},
    guardians:[{name:guardian,relationship:'Mother',dob:'1992-09-08',phone,legalAuthority:'Yes',working:'Yes',company:'ABC Bank PLC'},{name:second,relationship:'Father',dob:'1990-04-12',phone:secondPhone,legalAuthority:'Yes',working:'Yes',company:'Lanka Logistics'}],
    legalRestrictions:{answer:'No',details:''},emergency:{name:second,relationship:'Father',phone:secondPhone},
    pickup:[{name:second,relationship:'Father',photo:true,photoName:'collector-photo-1.jpg'},{name:isAmaya?'Malini Perera':isImani?'Nirmala de Alwis':'Grandmother',relationship:'Grandmother',photo:true,photoName:'collector-photo-2.jpg'}],
    health:{allergies:isAmaya?'Yes':'No',allergyDetails:isAmaya?'Peanut allergy':'',conditions:isImani?'Yes':'No',conditionDetails:isImani?'Asthma — inhaler guidance provided':'',medication:'No',medicationDetails:'',dietary:'No',dietaryDetails:'',emergencyInstructions:'',other:'No',otherDetails:''},
    facebook:'Yes, that\'s okay',recipients:[guardian,second],documents:{birthCertificate:false,birthCertificateFile:null},starter:{uniform:'Size 24',books:'Pending collection'}
  }:{
    child:{legalName:childName,preferred,dob,gender:'',address:'',languages:[],hasSiblings:'',siblings:[]},
    guardians:[{name:guardian,relationship:'',dob:'',phone,legalAuthority:'',working:'',company:''}],
    legalRestrictions:{answer:'',details:''},emergency:{name:'',relationship:'',phone:''},pickup:[{name:'',relationship:'',photo:false,photoName:null}],
    health:{allergies:'',allergyDetails:'',conditions:'',conditionDetails:'',medication:'',medicationDetails:'',dietary:'',dietaryDetails:'',emergencyInstructions:'',other:'',otherDetails:''},
    facebook:'',recipients:[],documents:{birthCertificate:false,birthCertificateFile:null},starter:{uniform:'',books:'Pending collection'}
  };
  return {status:submitted?'submitted':'not_sent',sentAt:submitted?'2026-09-13T12:00':null,submittedAt:submitted?'2026-09-13T19:20':null,healthConfirmed:!!opt.healthConfirmed,draft,snapshot:submitted?{submittedAt:'2026-09-13T19:20',data:JSON.parse(JSON.stringify(draft))}:null};
}
function week(label,area,summary,published,days){return {label,officialArea:area,summary,published,days,approvedBy:published?'Anjali Fernando':null,publishedAt:published?'2026-09-11T15:00':null}}
function planAct(libId,uid){return {uid,libId,adaptation:'',delivery:null,deliveryNote:'',deliveredAt:null}}

let db;
try{db=JSON.parse(localStorage.getItem(storageKey))||seedDB()}catch(e){db=seedDB()}
function save(){try{localStorage.setItem(storageKey,JSON.stringify(db))}catch(e){}}
function resetDemo(){if(confirm('Reset the prototype to its original sample records?')){db=seedDB();save();render()}}
function ui(){return db.ui}
function currentPersona(){return db.personas[ui().persona]||db.personas.anjali}
function has(bundle){return currentPersona().bundles.includes(bundle)}
function classInScope(className){return has('Head Teacher')||has('Daycare')||currentPersona().scope===className}
function esc(s){return String(s??'').replace(/[&<>"']/g,m=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]))}
function money(n){return 'LKR '+Number(n||0).toLocaleString()}
function badge(text,t='blue'){return `<span class="badge b-${t}">${text}</span>`}
function prov(text,t='reused'){return `<span class="prov ${t}">${text}</span>`}
function btn(label,action,kind='secondary',extra=''){return `<button class="btn ${kind} ${extra}" onclick="${action}">${label}</button>`}
function kv(k,v){return `<div class="kv"><div class="k">${k}</div><div class="v">${v}</div></div>`}
function notice(text,type='info'){return `<div class="notice ${type}">${text}</div>`}
function field(label,value='',type='text',disabled=false,id=''){return `<div class="field"><label>${label}</label><input ${id?`id="${id}"`:''} type="${type}" value="${esc(value)}" ${disabled?'disabled':''}></div>`}
function selectField(label,options,value='',id='',onchange=''){return `<div class="field"><label>${label}</label><select ${id?`id="${id}"`:''} ${onchange?`onchange="${onchange}"`:''}>${options.map(o=>`<option ${o===value?'selected':''}>${esc(o)}</option>`).join('')}</select></div>`}
function textArea(label,value='',id=''){return `<div class="field"><label>${label}</label><textarea ${id?`id="${id}"`:''}>${esc(value)}</textarea></div>`}
function checked(v){return v?'checked':''}
function byId(id){return document.getElementById(id)}
function val(id){let e=byId(id);return e?e.value:''}
function setRoute(route){ui().route=route;ui().modal=null;ui().drawer=null;save();render();window.scrollTo({top:0,behavior:'smooth'})}
function openModal(name,data=null){ui().modal={name,data};save();render()}
function openDrawer(name,data=null){ui().drawer={name,data};save();render()}
function closeOverlay(){ui().modal=null;ui().drawer=null;save();render()}
function setAdmissionCase(id){ui().admissionsCase=id;ui().admissionsTab='overview';save();render()}
function setAdmissionTab(tab){ui().admissionsTab=tab;save();render()}
function setLessonTab(tab){ui().lessonTab=tab;save();render()}
function setHealthTab(tab){ui().healthTab=tab;save();render()}
function setMediaTab(tab){ui().mediaTab=tab;save();render()}
function addEvent(caseId,type,title,detail=''){db.admissions[caseId].events.push(ev(type,title,detail));save()}
function fmtDate(s){if(!s)return '—';let d=new Date(s+'T00:00:00');return d.toLocaleDateString('en-GB',{day:'2-digit',month:'short',year:'numeric'})}

const sources=['Website','Facebook','Instagram','WhatsApp','Google / Search','Phone call','Walk-in / Signboard','Existing-family referral','Other referral','Event / Open Day','Other'];
const reasons=['Educational approach / play-based learning','Head Teacher / teaching quality','English-medium environment','Extended daycare / operating hours','Location / convenience','Facilities / outdoor environment','Reputation / recommendation / preschool legacy','Fees / value','Other'];
const lostReasons=['Could not contact','Chose another preschool','Fees / affordability','Location / transport','Hours / daycare needs not suitable','No suitable place / start date','Family postponed preschool decision','No longer interested','Other'];
const routes={today:{label:'Today',icon:'⌂'},admissions:{label:'Admissions',icon:'◎',bundles:['Admissions','Head Teacher']},attendance:{label:'Attendance',icon:'✓',bundles:['Head Teacher','Class Teacher','Assistant Teacher','Daycare']},daycare:{label:'Daycare',icon:'☀',bundles:['Daycare','Head Teacher']},lessons:{label:'Lessons',icon:'✦',bundles:['Head Teacher','Class Teacher']},reports:{label:'Reports',icon:'▤',bundles:['Head Teacher','Class Teacher']},health:{label:'Health & safety',icon:'♥',bundles:['Head Teacher','Class Teacher','Daycare']},billing:{label:'Billing',icon:'₨',bundles:['Accounts']},media:{label:'Photos & media',icon:'▧',bundles:['Head Teacher','Class Teacher','Social Media']},calendar:{label:'Calendar',icon:'◫',bundles:['Head Teacher','System Administration']},staff:{label:'Staff & access',icon:'⚙',bundles:['System Administration']}};
function allowed(route){let r=routes[route];if(!r||!r.bundles)return true;return r.bundles.some(has)}
function navButton(route){let r=routes[route];let active=ui().route===route||(route==='lessons'&&ui().route==='lesson-today');return `<button class="nav-item ${active?'active':''}" onclick="setRoute('${route}')"><span class="ico">${r.icon}</span>${r.label}${route==='today'&&todayActions().length?`<span class="nav-badge">${todayActions().length}</span>`:''}</button>`}
function navList(){let work=['today','admissions','attendance','daycare','lessons','reports','health','billing','media'];let manage=['calendar','staff'];return `<div class="nav-group"><div class="nav-label">Work</div>${work.filter(allowed).map(navButton).join('')}</div><div class="nav-group"><div class="nav-label">Manage</div>${manage.filter(allowed).map(navButton).join('')}</div>`}
function mobileNav(){let pref=['today','attendance','lessons','daycare','admissions','billing','media','staff'];let xs=pref.filter(allowed).slice(0,5);return `<div class="mobile-nav">${xs.map(r=>`<button class="${ui().route===r||r==='lessons'&&ui().route==='lesson-today'?'active':''}" onclick="setRoute('${r}')"><span class="mi">${routes[r].icon}</span>${routes[r].label.split(' ')[0]}</button>`).join('')}</div>`}
function personaSelect(){return `<div class="prototype-persona"><span>Prototype persona</span><select onchange="switchPersona(this.value)">${Object.values(db.personas).map(p=>`<option value="${p.id}" ${p.id===ui().persona?'selected':''}>${p.name}</option>`).join('')}</select></div>`}
function switchPersona(id){ui().persona=id;let r=ui().route;if(!allowed(r)&&r!=='parent-application'&&r!=='parent-onboarding')ui().route='today';save();render()}
function shell(content){let p=currentPersona();return `<div class="app"><aside class="sidebar"><div class="brand"><div class="brandmark">M</div><div><h1>MPS</h1><small>Simple · Practical · Preschool-first</small></div></div>${navList()}<button class="nav-item" onclick="resetDemo()"><span class="ico">↺</span>Reset prototype</button></aside><main class="main"><header class="topbar"><div class="mobile-head"><div class="brandmark">M</div></div><div class="tenant"><b>${ORG}</b><span>Configured tenant · MPS product</span></div><div class="top-spacer"></div>${(has('Admissions')||has('Accounts')||has('Head Teacher'))?`<input class="search" placeholder="Search child, family, invoice…" onkeydown="if(event.key==='Enter')globalSearch(this.value)"/>`:''}<div class="user-meta"><b>${p.name}</b><span>${p.bundles.join(' · ')}</span></div><div class="avatar">${p.initials}</div></header><div class="review-harness"><strong>Prototype review</strong><span>View as sample user only — real staff never switch roles.</span>${personaSelect()}</div><div class="content">${content}</div></main>${mobileNav()}</div>`}
function pageHead(eye,title,sub,actions=''){return `<div class="page-head"><div class="left"><div class="eyebrow">${eye}</div><h2>${title}</h2><p>${sub}</p></div>${actions?`<div class="page-actions">${actions}</div>`:''}</div>`}
function globalSearch(q){q=(q||'').trim().toLowerCase();if(!q)return;if(allowed('admissions')){let a=Object.values(db.admissions).find(c=>c.childName.toLowerCase().includes(q)||c.guardian.toLowerCase().includes(q));if(a){ui().admissionsCase=a.id;ui().admissionsTab='overview';setRoute('admissions');return}}if(allowed('billing')){let inv=Object.values(db.billing.invoices).find(i=>i.number.toLowerCase().includes(q)||i.childName.toLowerCase().includes(q));if(inv){setRoute('billing');openModal('invoice-detail',{id:inv.id});return}}alert('No record in your authorised prototype scope matched that search.') }

function admissionDerived(c){
  if(c.closed)return {stage:c.closed.type,status:c.closed.type,statusTone:'grey',next:'Closed'};
  if(c.enrolment){let ready=c.onboarding&&c.onboarding.healthConfirmed&&onboardingSafetyComplete(c.onboarding);return {stage:'Enrolled',status:ready?'Ready to start':c.onboarding?.status==='submitted'?'Pre-start review':'Pre-start',statusTone:ready?'green':c.onboarding?.status==='submitted'?'amber':'blue',next:ready?'Ready to start':c.onboarding?.status==='submitted'?'Review onboarding submission':'Send/complete onboarding'};}
  if(c.fee){if(c.fee.status==='overdue')return {stage:'Accepted',status:'Fee overdue',statusTone:'red',next:'Decide overdue fee action'};if(c.fee.status==='satisfied'||c.fee.verified>=c.fee.amount)return {stage:'Accepted',status:'Fee satisfied',statusTone:'green',next:'Create enrolment'};return {stage:'Accepted',status:'Admission fee',statusTone:'amber',next:'Verify / settle admission fee'};}
  if(c.application.status==='accepted')return {stage:'Accepted',status:'Accepted',statusTone:'green',next:'Create admission-fee invoice'};
  if(c.application.status==='waitlisted')return {stage:'Application',status:'Waitlisted',statusTone:'amber',next:'Review waitlist when capacity changes'};
  if(c.application.status==='declined')return {stage:'Application',status:'Declined',statusTone:'grey',next:'Closed'};
  if(c.application.status==='submitted')return {stage:'Application',status:'Review required',statusTone:'purple',next:'Review submitted application'};
  if(c.application.status==='sent')return {stage:'Application',status:'Waiting for parent',statusTone:'blue',next:'Waiting for parent application'};
  if(c.tour?.status==='completed')return {stage:'Tour',status:'Tour completed',statusTone:'blue',next:'Send secure application'};
  if(c.tour?.status==='scheduled')return {stage:'Tour',status:'Tour scheduled',statusTone:'blue',next:'Complete tour'};
  if(c.events.some(e=>e.type==='qualified'))return {stage:'Qualified',status:'Qualified Lead',statusTone:'green',next:'Arrange a tour'};
  return {stage:'Enquiry',status:'New enquiry',statusTone:'blue',next:'Review qualification'};
}
function admissionStageIndex(c){let d=admissionDerived(c);let map={Enquiry:0,Qualified:1,Tour:2,Application:3,Accepted:4,Enrolled:6};let idx=map[d.stage]??0;if(c.fee)idx=5;if(c.enrolment)idx=6;if(d.status==='Ready to start')idx=7;return idx}
function journey(c){let steps=['Enquiry','Qualified','Tour','Application','Accepted','Fee','Enrolled','Ready'];let current=admissionStageIndex(c);return `<div class="journey">${steps.map((s,i)=>`<div class="journey-step ${i<current?'done':i===current?'current':''}"><span class="dot">${i<current?'✓':i+1}</span>${s}</div>`).join('')}</div>`}
function admissionsList(){return `<div class="case-list"><div class="case-search"><input placeholder="Search admissions…" oninput="filterAdmissions(this.value)"></div><div id="admissionsCaseItems">${Object.values(db.admissions).map(caseListItem).join('')}</div></div>`}
function caseListItem(c){let d=admissionDerived(c);return `<div class="case-item ${ui().admissionsCase===c.id?'active':''}" data-search="${esc((c.childName+' '+c.guardian+' '+d.status).toLowerCase())}" onclick="setAdmissionCase('${c.id}')"><div class="top"><strong>${c.childName}</strong><span style="margin-left:auto">${badge(d.status,d.statusTone)}</span></div><div class="meta">${c.guardian} · ${c.service}<br>${d.next}</div></div>`}
function filterAdmissions(q){q=(q||'').toLowerCase();document.querySelectorAll('#admissionsCaseItems .case-item').forEach(el=>el.style.display=el.dataset.search.includes(q)?'block':'none')}
function admissionHero(c){let d=admissionDerived(c);return `<div class="case-hero"><div class="case-hero-row"><div class="case-avatar">${c.childName.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div class="case-title"><h2>${c.childName}</h2><p>${c.guardian} · ${c.phone} · Start ${fmtDate(c.start)}<br>${c.service}</p></div><div class="case-status">${badge(d.stage,'blue')}${badge(d.status,d.statusTone)}</div></div>${journey(c)}</div>`}
function admissionTabs(){let tabs=['overview','application','payments','prestart','timeline'];return `<div class="tabs">${tabs.map(t=>`<button class="tab ${ui().admissionsTab===t?'active':''}" onclick="setAdmissionTab('${t}')">${t==='prestart'?'Pre-start':t[0].toUpperCase()+t.slice(1)}</button>`).join('')}</div>`}
function admissionsMetrics(){let all=Object.values(db.admissions).map(admissionDerived);let enq=all.filter(d=>['Enquiry','Qualified'].includes(d.stage)).length;let tourApp=all.filter(d=>['Tour','Application'].includes(d.stage)).length;let acc=all.filter(d=>d.stage==='Accepted').length;let pre=all.filter(d=>d.stage==='Enrolled'&&d.status!=='Ready to start').length;return `<div class="metric-row"><div class="metric"><strong>${enq}</strong><span>Enquiries / leads</span><small>Current sample pipeline</small></div><div class="metric"><strong>${tourApp}</strong><span>Tours / applications</span><small>Asynchronous family work</small></div><div class="metric"><strong>${acc}</strong><span>Accepted</span><small>Fee gate applies</small></div><div class="metric"><strong>${pre}</strong><span>Pre-start</span><small>Safety readiness work</small></div></div>`}
function renderAdmissions(){let c=db.admissions[ui().admissionsCase]||Object.values(db.admissions)[0];return shell(`${pageHead('Admissions','Admissions','A persistent family workspace. Staff do the next real job and leave; MPS keeps the case state.',btn('New enquiry',"openModal('new-enquiry')",'primary'))}${admissionsMetrics()}<div style="height:14px"></div><div class="case-layout">${admissionsList()}<div class="case-workspace">${admissionHero(c)}${admissionTabs()}${renderAdmissionTab(c)}</div></div>`)}
function renderAdmissionTab(c){if(ui().admissionsTab==='application')return admissionApplication(c);if(ui().admissionsTab==='payments')return admissionPayments(c);if(ui().admissionsTab==='prestart')return admissionPrestart(c);if(ui().admissionsTab==='timeline')return admissionTimeline(c);return admissionOverview(c)}
function admissionOverview(c){let d=admissionDerived(c);let action='';
  if(d.stage==='Enquiry')action=actionCard('Next action · Review qualification','Confirm genuine family, relevant age/start, real admission interest and permission to follow up.',btn('Review qualification',`openModal('qualify-lead',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Qualified')action=actionCard('Next action · Arrange a tour','Keep the appointment on the same family history.',btn('Schedule tour',`openModal('schedule-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour'&&c.tour?.status==='scheduled')action=actionCard('Next action · Complete tour',`${fmtDate(c.tour.date)} · ${c.tour.time}. Record the real outcome after the visit.`,btn('Complete tour',`openModal('complete-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour')action=actionCard('Next action · Send secure application','Tour is complete and the family wants to proceed.',btn('Send application',`openModal('send-application',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.status==='Waiting for parent')action=actionCard('Waiting for parent','The secure Application link is active. Staff can resend/copy it without leaving this record.',`${btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm')}${btn('Resend link',`openModal('send-application',{caseId:'${c.id}'})`,'secondary','sm')}`);
  else if(d.status==='Review required')action=actionCard('Next action · Review submitted application','The parent submission is now part of this same case.',btn('Review application',"setAdmissionTab('application')",'primary','sm'));
  else if(d.status==='Fee overdue')action=actionCard('Admission fee overdue','The place is not released automatically. An authorised decision is required.',btn('Review overdue',`openModal('overdue-fee',{caseId:'${c.id}'})`,'primary','sm'),'warning');
  else if(d.status==='Admission fee')action=actionCard('Admission fee in progress',`${money(c.fee.amount-c.fee.verified)} verified balance remaining.`,btn('Open payments',"setAdmissionTab('payments')",'primary','sm'));
  else if(d.status==='Fee satisfied')action=actionCard('Fee gate satisfied','Create the enrolment from the accepted Application; do not retype the family.',btn('Create enrolment',`openModal('create-enrolment',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Enrolled')action=actionCard(`Pre-start · ${d.status}`,'Parent onboarding and staff review live here; safety readiness is separate from non-critical checklist completion.',btn('Open pre-start',"setAdmissionTab('prestart')",'primary','sm'),d.status==='Pre-start review'?'warning':'');
  return `${action}<div class="grid" style="margin-top:12px"><div class="span-7 card"><h3>Family snapshot</h3>${kv('Lead source',`${c.source} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',c.reason||'—')}${kv('Tour',c.tour?`${c.tour.status} · ${fmtDate(c.tour.date)} ${c.tour.time||''}`:'Not yet scheduled')}${kv('Application',applicationSummary(c))}${kv('Planned start',fmtDate(c.start))}</div><div class="span-5 card"><h3>Current state</h3>${kv('Stage',d.stage)}${kv('Status',badge(d.status,d.statusTone))}${kv('Next action',d.next)}${c.fee?kv('Admission fee',`${money(c.fee.amount)} · ${money(c.fee.verified)} verified`):''}</div></div>`}
function actionCard(title,sub,buttons,cls=''){return `<div class="action-card ${cls}"><div class="icon">${cls==='warning'?'!':'→'}</div><div class="grow"><strong>${title}</strong><span>${sub}</span></div><div style="display:flex;gap:6px;flex-wrap:wrap">${buttons}</div></div>`}
function applicationSummary(c){let s=c.application.status;let labels={not_sent:'Not sent',sent:'Sent · waiting for parent',submitted:'Submitted · review required',accepted:'Accepted',waitlisted:'Waitlisted',declined:'Declined'};return labels[s]||s}
function admissionApplication(c){let a=c.application;if(a.status==='not_sent')return `<div class="card"><h3>Application</h3><p>This family has not been sent an Application yet.</p><div style="margin-top:12px">${btn('Generate secure Application',`openModal('send-application',{caseId:'${c.id}'})`,'primary')}</div></div>`;
 let snap=a.snapshot?.data||a.draft||{};let decision=a.status==='submitted'?`<div class="section-title">Decision</div><div style="display:flex;gap:8px;flex-wrap:wrap">${btn('Decline',`openModal('decline-application',{caseId:'${c.id}'})`,'danger')}${btn('Record withdrawal',`openModal('withdraw-application',{caseId:'${c.id}'})`,'secondary')}${btn('Waitlist',`openModal('waitlist-application',{caseId:'${c.id}'})`,'secondary')}${btn('Accept',`openModal('accept-application',{caseId:'${c.id}'})`,'primary')}</div>`:'';return `<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Application</h3><p>Parent submission stays on the same admissions record with provenance.</p></div>${badge(applicationSummary(c),a.status==='submitted'?'purple':a.status==='accepted'?'green':'blue')}</div>${kv('Child',`${snap.childName||c.childName} ${prov(a.snapshot?'Parent submitted':'Admissions prefill',a.snapshot?'parent':'reused')}`)}${kv('DOB',snap.dob||c.dob)}${kv('Guardian',snap.guardian||c.guardian)}${kv('Phone',snap.phone||c.phone)}${kv('Service',snap.service||c.service)}${kv('Desired start',fmtDate(snap.start||c.start))}${snap.note?kv('Application note',esc(snap.note)):''}${decision}</div><div class="span-4 card"><h3>Secure link</h3>${kv('Status',a.status==='sent'?'Sent / active':a.status==='submitted'?'Submitted':'Closed after decision')}${kv('Parent account','Not required')}${kv('Channel','Registered WhatsApp')}${a.status==='sent'?btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm'):''}</div></div>`}
function feeOutstanding(f){return Math.max(0,(f?.amount||0)-(f?.verified||0))}
function admissionPayments(c){if(!c.fee)return `<div class="card"><h3>Admission fee</h3><p>No fee gate exists yet for this case. It is created only after Acceptance.</p></div>`;let f=c.fee;let pending=f.pending||[];let outstanding=feeOutstanding(f);return `<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Admission fee</h3><p>Issued financial history is stable; verified money is allocated to the gate.</p></div>${badge(f.status==='overdue'?'Overdue':outstanding===0?'Satisfied':'In progress',f.status==='overdue'?'red':outstanding===0?'green':'amber')}</div><div class="money">${money(f.amount)}</div>${kv('Due date',fmtDate(f.due))}${kv('Verified',money(f.verified))}${kv('Outstanding',money(outstanding))}<div class="section-title">Payment activity</div>${pending.length?pending.map(p=>`<div class="child-row"><strong>${money(p.amount)} · ${p.method}</strong><span>${badge(p.status,p.status==='pending'?'amber':p.status==='rejected'?'red':'green')}</span><span class="hide-mobile">${esc(p.reference||'No reference')}</span><span>${p.status==='pending'?btn('Verify',`openModal('verify-admission-payment',{caseId:'${c.id}',paymentId:'${p.id}'})`,'primary','sm'):'✓'}</span></div>`).join(''):'<div class="empty">No payment recorded yet.</div>'}</div><div class="span-4 card"><h3>Controls</h3><p>Accepted is not Enrolled. Full verified settlement or an authorised waiver is required before conversion.</p>${outstanding>0?`<div style="margin-top:10px">${btn('Record payment',`openModal('record-admission-payment',{caseId:'${c.id}'})`,'primary')}</div>`:''}${f.status==='overdue'?`<div style="margin-top:8px">${btn('Overdue action',`openModal('overdue-fee',{caseId:'${c.id}'})`,'secondary')}</div>`:''}</div></div>`}
function onboardingSafetyComplete(o){if(!o||o.status!=='submitted')return false;let d=o.draft,detailOk=(ans,detail)=>ans==='No'||(ans==='Yes'&&String(detail||'').trim());let childOk=!!(d.child?.legalName&&d.child?.preferred&&d.child?.dob&&d.child?.gender&&d.child?.address&&Array.isArray(d.child?.languages)&&d.child.languages.length);let siblingOk=d.child?.hasSiblings==='No'||(d.child?.hasSiblings==='Yes'&&d.child.siblings?.length&&d.child.siblings.every(s=>s.relationship&&s.dob));let guardiansOk=!!(d.guardians?.length&&d.guardians.every(g=>g.name&&g.relationship&&g.dob&&g.legalAuthority&&g.working&&(g.working==='No'||g.company))&&d.guardians.some(g=>g.legalAuthority==='Yes'&&g.phone));let legalOk=!!(d.legalRestrictions?.answer&&(d.legalRestrictions.answer==='No'||String(d.legalRestrictions.details||'').trim()));let emergencyOk=!!(d.emergency?.name&&d.emergency?.relationship&&d.emergency?.phone);let pickupOk=!!(d.pickup?.length&&d.pickup.every(p=>p.name&&p.relationship&&p.photo));let h=d.health||{},healthOk=detailOk(h.allergies,h.allergyDetails)&&detailOk(h.conditions,h.conditionDetails)&&detailOk(h.medication,h.medicationDetails)&&detailOk(h.dietary,h.dietaryDetails)&&detailOk(h.other,h.otherDetails);return !!(childOk&&siblingOk&&guardiansOk&&legalOk&&emergencyOk&&pickupOk&&healthOk&&d.facebook&&d.recipients?.length)}
function onboardingChecklistComplete(o){if(!o)return false;return !!(o.draft.documents?.birthCertificate&&o.draft.starter?.books==='Collected')}
function admissionPrestart(c){if(!c.enrolment)return `<div class="card"><h3>Pre-start</h3><p>Pre-start work begins after Enrolment. Accepted is not Enrolled.</p></div>`;if(!c.onboarding)c.onboarding=seedOnboarding(c.childName,c.childName.split(' ')[0],c.dob,c.guardian,c.phone,{});let o=c.onboarding;let safety=onboardingSafetyComplete(o);let checklist=onboardingChecklistComplete(o);let safetyPct=o.status==='submitted'?(o.healthConfirmed&&safety?100:80):o.status==='sent'?30:10;let checklistPct=(o.draft.documents?.birthCertificate?50:0)+(o.draft.starter?.books==='Collected'?50:0);return `<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Pre-start readiness</h3><p>Safety readiness and practical checklist completion are shown separately.</p></div>${badge(o.healthConfirmed&&safety?'Safety ready':o.status==='submitted'?'Review required':'In progress',o.healthConfirmed&&safety?'green':o.status==='submitted'?'amber':'blue')}</div><strong>Safety / operational readiness</strong><div class="progress"><span style="width:${safetyPct}%"></span></div><p>${safetyPct}% · guardian/pickup/Health/communication controls</p><div style="height:10px"></div><strong>Practical checklist</strong><div class="progress"><span style="width:${checklistPct}%"></span></div><p>${checklistPct}% · non-critical documents/starter items</p><div class="child-row"><strong>Guardian & legal authority</strong><span>${badge(o.status==='submitted'?'Submitted':'Outstanding',o.status==='submitted'?'green':'amber')}</span><span class="hide-mobile">${o.draft.guardians?.length||0} guardian profiles</span><span>›</span></div><div class="child-row"><strong>Emergency & pickup</strong><span>${badge(o.status==='submitted'&&o.draft.pickup?.length?'Submitted':'Outstanding',o.status==='submitted'&&o.draft.pickup?.length?'green':'amber')}</span><span class="hide-mobile">${o.draft.pickup?.length||0} authorised pickup people</span><span>›</span></div><div class="child-row"><strong>Health</strong><span>${badge(o.healthConfirmed?'Confirmed':o.status==='submitted'?'Review required':'Outstanding',o.healthConfirmed?'green':'amber')}</span><span class="hide-mobile">Parent input → authorised review</span><span>${o.status==='submitted'&&!o.healthConfirmed?btn('Review',`openModal('review-health',{caseId:'${c.id}'})`,'primary','sm'):'›'}</span></div><div class="child-row"><strong>Birth certificate copy</strong><span>${badge(o.draft.documents?.birthCertificate?'Received':'Outstanding',o.draft.documents?.birthCertificate?'green':'amber')}</span><span class="hide-mobile">${o.draft.documents?.birthCertificateFile||'Practical checklist'}</span><span>${!o.draft.documents?.birthCertificate?btn('Mark received',`markOnboardingDocument('${c.id}')`,'secondary','sm'):'✓'}</span></div><div class="child-row"><strong>Starter items</strong><span>${badge(o.draft.starter?.books==='Collected'?'Complete':'In progress',o.draft.starter?.books==='Collected'?'green':'blue')}</span><span class="hide-mobile">${esc(o.draft.starter?.uniform||'')} · ${esc(o.draft.starter?.books||'')}</span><span>${o.draft.starter?.books!=='Collected'?btn('Mark collected',`markStarterComplete('${c.id}')`,'secondary','sm'):'✓'}</span></div>${o.healthConfirmed&&safety?notice('<strong>Ready to Start for safety/operations.</strong> Any remaining non-critical checklist items stay visible and do not masquerade as 100% complete.','ok'):notice('Do not rely on parent-submitted Health as authoritative until an authorised review confirms it.','info')}</div><div class="span-4 card"><h3>Parent onboarding</h3>${kv('Status',o.status==='submitted'?'Submitted':o.status==='sent'?'Sent · waiting for parent':'Not sent')}${kv('Channel','Secure link via registered WhatsApp')}${kv('Account required','No')}${o.status==='not_sent'?btn('Generate & send link',`sendOnboarding('${c.id}')`,'primary','sm'):btn(o.status==='submitted'?'Preview submission':'Open parent preview',`openParentOnboarding('${c.id}')`,'secondary','sm')}</div></div>`}
function markOnboardingDocument(id){let o=db.admissions[id].onboarding;o.draft.documents.birthCertificate=true;o.draft.documents.birthCertificateFile=o.draft.documents.birthCertificateFile||'Received by staff';save();render()}
function markStarterComplete(id){let o=db.admissions[id].onboarding;o.draft.starter.books='Collected';save();render()}
function admissionTimeline(c){let events=[...c.events].sort((a,b)=>String(a.at).localeCompare(String(b.at)));return `<div class="card"><h3>Case timeline</h3><p>Derived only from this family’s actual recorded events.</p><div class="timeline">${events.map(e=>`<div class="timeline-item"><b>${esc(e.title)}</b><div>${esc(e.detail||'')}${e.at?` · ${new Date(e.at).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}`:''}</div></div>`).join('')}</div></div>`}

function openParentApplication(caseId){ui().parentApplicationCase=caseId;ui().parentApplicationStep=1;ui().route='parent-application';save();render()}
function syncApplicationDraft(caseId){let c=db.admissions[caseId],d=c.application.draft||(c.application.draft={});['childName','dob','guardian','phone','service','start'].forEach(k=>{let e=byId('pa_'+k);if(e)d[k]=e.value});let n=byId('pa_note');if(n)d.note=n.value;save()}
function appContinue(caseId){syncApplicationDraft(caseId);let d=db.admissions[caseId].application.draft;if(!d.childName||!d.dob||!d.guardian||!d.phone||!d.service||!d.start){alert('Please complete the required Application details before continuing.');return}ui().parentApplicationStep=2;save();render()}
function submitApplication(caseId){syncApplicationDraft(caseId);if(val('pa_confirm')!=='Yes — submit'){alert('Please confirm the information or go back to correct it.');return}let c=db.admissions[caseId];c.application.status='submitted';c.application.snapshot={submittedAt:new Date().toISOString(),data:JSON.parse(JSON.stringify(c.application.draft))};c.childName=c.application.draft.childName;c.dob=c.application.draft.dob;c.guardian=c.application.draft.guardian;c.phone=c.application.draft.phone;c.service=c.application.draft.service;c.start=c.application.draft.start;addEvent(caseId,'application_submitted','Application submitted','Parent reviewed/confirmed the secure form');ui().route='admissions';ui().admissionsCase=caseId;ui().admissionsTab='application';ui().parentApplicationStep=1;save();render()}
function renderParentApplication(){let id=ui().parentApplicationCase,c=db.admissions[id];if(!c){ui().route='admissions';save();return renderAdmissions()}let d=c.application.draft||(c.application.draft={childName:c.childName,dob:c.dob,guardian:c.guardian,phone:c.phone,service:c.service,start:c.start,note:''});let s=ui().parentApplicationStep;let body=s===1?`${notice('Please review what the preschool already knows. Correct only what changed or add what is missing.','info')}<div class="form-grid">${field('Child full name',d.childName,'text',false,'pa_childName')}${field('Date of birth',d.dob,'date',false,'pa_dob')}${field('Parent / guardian',d.guardian,'text',false,'pa_guardian')}${field('Registered phone',d.phone,'text',false,'pa_phone')}</div>${selectField('Interested service',['Baby Class','Upper Class','Baby Class + Standard Daycare','Baby Class + Extended Daycare'],d.service,'pa_service')}${field('Desired start',d.start,'date',false,'pa_start')}`:`${notice('This is deliberately a lean Application. Pickup, Health, documents and consent belong to post-enrolment onboarding.','ok')}${textArea('Anything Admissions should know for this application?',d.note||'','pa_note')}${selectField('Please confirm the information above is accurate',['Yes — submit','No — I need to correct something'],'Yes — submit','pa_confirm')}`;return `<div class="parent-view"><div class="parent-card"><div class="parent-brand"><strong>${ORG}</strong><p>Secure Application · no MPS account required</p></div><div class="parent-content"><div class="stepper"><span class="active"></span><span class="${s===2?'active':''}"></span></div><div class="eyebrow">Application for ${esc(c.childName)}</div><h2 style="color:var(--navy);font-size:20px;margin:5px 0 12px">${s===1?'Review your details':'Confirm & submit'}</h2>${body}<div class="parent-foot">${btn(s===1?'Back to Admissions':'Back',s===1?`ui().route='admissions';save();render()`:`syncApplicationDraft('${id}');ui().parentApplicationStep=1;save();render()`,'secondary')}${btn(s===1?'Continue':'Submit application',s===1?`appContinue('${id}')`:`submitApplication('${id}')`,'primary')}</div></div></div></div>`}

function ensureOnboarding(caseId){let c=db.admissions[caseId];if(!c.onboarding)c.onboarding=seedOnboarding(c.childName,c.childName.split(' ')[0],c.dob,c.guardian,c.phone,{});return c.onboarding}
function sendOnboarding(caseId){let o=ensureOnboarding(caseId);o.status='sent';o.sentAt=new Date().toISOString();addEvent(caseId,'onboarding_sent','New Family Onboarding link sent','Secure link via registered WhatsApp');save();render()}
function openParentOnboarding(caseId){ensureOnboarding(caseId);ui().parentOnboardingCase=caseId;ui().parentOnboardingStep=1;ui().route='parent-onboarding';save();render()}
function syncOnboarding(caseId,step){let o=ensureOnboarding(caseId),d=o.draft;if(step===1){d.child.legalName=val('po_legal');d.child.preferred=val('po_pref');d.child.dob=val('po_dob');d.child.gender=val('po_gender').startsWith('Select')?'':val('po_gender');d.child.address=val('po_address');d.child.languages=Array.from(document.querySelectorAll('[data-home-language]:checked')).map(x=>x.value);d.child.hasSiblings=val('po_has_siblings').startsWith('Select')?'':val('po_has_siblings');if(d.child.hasSiblings==='No')d.child.siblings=[];else d.child.siblings.forEach((x,i)=>{x.relationship=val(`po_sib${i}_rel`)||x.relationship;x.dob=val(`po_sib${i}_dob`)||x.dob});}if(step===2){d.guardians.forEach((g,i)=>{g.name=val(`po_g${i}_name`);g.relationship=val(`po_g${i}_rel`).startsWith('Select')?'':val(`po_g${i}_rel`);g.dob=val(`po_g${i}_dob`);g.phone=val(`po_g${i}_phone`);g.legalAuthority=val(`po_g${i}_auth`).startsWith('Select')?'':val(`po_g${i}_auth`);g.working=val(`po_g${i}_work`).startsWith('Select')?'':val(`po_g${i}_work`);g.company=val(`po_g${i}_company`)});d.legalRestrictions={answer:val('po_legal_restrict').startsWith('Select')?'':val('po_legal_restrict'),details:val('po_legal_details')};}if(step===3){d.emergency={name:val('po_em_name'),relationship:val('po_em_rel').startsWith('Select')?'':val('po_em_rel'),phone:val('po_em_phone')};d.pickup.forEach((p,i)=>{p.name=val(`po_p${i}_name`);p.relationship=val(`po_p${i}_rel`).startsWith('Select')?'':val(`po_p${i}_rel`);p.photo=!!p.photo})}if(step===4){d.health={allergies:(val('po_allergy').startsWith('Select')?'':val('po_allergy')),allergyDetails:val('po_allergy_detail'),conditions:(val('po_conditions').startsWith('Select')?'':val('po_conditions')),conditionDetails:val('po_condition_detail'),medication:(val('po_medication').startsWith('Select')?'':val('po_medication')),medicationDetails:val('po_medication_detail'),dietary:(val('po_dietary').startsWith('Select')?'':val('po_dietary')),dietaryDetails:val('po_dietary_detail'),emergencyInstructions:val('po_emergency_medical'),other:(val('po_other').startsWith('Select')?'':val('po_other')),otherDetails:val('po_other_detail')}}if(step===5){d.facebook=val('po_facebook').startsWith('Select')?'':val('po_facebook');d.recipients=Array.from(document.querySelectorAll('[data-recipient]:checked')).map(x=>x.value);d.starter.uniform=val('po_uniform').startsWith('Select')?'':val('po_uniform');d.starter.books=val('po_books')}save()}
function validateOnboardingStep(caseId,step){let o=ensureOnboarding(caseId),d=o.draft,fail=m=>{alert(m);return false};if(step===1){if(!d.child.legalName||!d.child.preferred||!d.child.dob||!d.child.gender||!d.child.address||!d.child.languages?.length||!d.child.hasSiblings)return fail('Please complete the required child and family details.');if(d.child.hasSiblings==='Yes'&&(!d.child.siblings.length||d.child.siblings.some(s=>!s.relationship||!s.dob)))return fail('Please complete each sibling relationship and date of birth.')}if(step===2){if(!d.guardians.length||d.guardians.some(g=>!g.name||!g.relationship||!g.dob||!g.legalAuthority||!g.working||(g.working==='Yes'&&!g.company)))return fail('Please complete the required guardian details.');if(!d.guardians.some(g=>g.legalAuthority==='Yes'&&g.phone))return fail('At least one authorised guardian must have the registered WhatsApp/mobile number.');if(!d.legalRestrictions.answer||(d.legalRestrictions.answer.startsWith('Yes')&&!String(d.legalRestrictions.details||'').trim()))return fail('Please complete the legal restrictions declaration.')}if(step===3){if(!d.emergency.name||!d.emergency.relationship||!d.emergency.phone)return fail('Please complete the emergency contact.');if(!d.pickup.length||d.pickup.some(p=>!p.name||!p.relationship||!p.photo))return fail('Each authorised pickup person needs a name, relationship and current verification photo.')}if(step===4){let h=d.health,detailOk=(a,x)=>a==='No'||(a==='Yes'&&String(x||'').trim());if(!['Yes','No'].includes(h.allergies)||!detailOk(h.allergies,h.allergyDetails)||!['Yes','No'].includes(h.conditions)||!detailOk(h.conditions,h.conditionDetails)||!['Yes','No'].includes(h.medication)||!detailOk(h.medication,h.medicationDetails)||!['Yes','No'].includes(h.dietary)||!detailOk(h.dietary,h.dietaryDetails)||!['Yes','No'].includes(h.other)||!detailOk(h.other,h.otherDetails))return fail('Please complete every Health/care declaration and any required details.')}if(step===5){if(!d.facebook||!d.recipients?.length||!d.starter.uniform)return fail('Please complete photo consent, communication recipients and the configured uniform size.')}return true}
function onboardingNext(caseId){let s=ui().parentOnboardingStep;syncOnboarding(caseId,s);if(!validateOnboardingStep(caseId,s))return;ui().parentOnboardingStep=Math.min(5,s+1);save();render()}
function onboardingBack(caseId){let s=ui().parentOnboardingStep;syncOnboarding(caseId,s);ui().parentOnboardingStep=Math.max(1,s-1);save();render()}
function addGuardian(caseId){let o=ensureOnboarding(caseId);o.draft.guardians.push({name:'',relationship:'',dob:'',phone:'',legalAuthority:'',working:'',company:''});save();render()}
function addSibling(caseId){let o=ensureOnboarding(caseId);o.draft.child.hasSiblings='Yes';o.draft.child.siblings.push({relationship:'Brother',dob:''});save();render()}
function markPickupPhoto(caseId,index,name){syncOnboarding(caseId,3);let o=ensureOnboarding(caseId);o.draft.pickup[index].photo=true;o.draft.pickup[index].photoName=name||'uploaded-photo.jpg';save();render()}
function markParentDocUploaded(caseId,name){syncOnboarding(caseId,5);let o=ensureOnboarding(caseId);o.draft.documents.birthCertificate=true;o.draft.documents.birthCertificateFile=name||'birth-certificate.pdf';save();render()}
function addPickup(caseId){let o=ensureOnboarding(caseId);o.draft.pickup.push({name:'',relationship:'',photo:false});save();render()}
function submitOnboarding(caseId){syncOnboarding(caseId,5);if(!validateOnboardingStep(caseId,5))return;let c=db.admissions[caseId],o=c.onboarding;o.status='submitted';o.submittedAt=new Date().toISOString();o.snapshot=JSON.parse(JSON.stringify({submittedAt:o.submittedAt,data:o.draft}));c.childName=o.draft.child.legalName;c.dob=o.draft.child.dob;c.guardian=o.draft.guardians[0]?.name||c.guardian;c.phone=o.draft.guardians[0]?.phone||c.phone;addEvent(caseId,'onboarding_submitted','New Family Onboarding submitted','Parent-provided information awaiting staff review');ui().route='admissions';ui().admissionsCase=caseId;ui().admissionsTab='prestart';ui().parentOnboardingStep=1;save();render()}
function guardianCard(g,i){return `<div class="card flat" style="margin-bottom:10px"><h3>Guardian ${i+1}</h3><div class="form-grid">${field('Full name',g.name,'text',false,`po_g${i}_name`)}${selectField('Relationship',['Select…','Mother','Father','Stepmother','Stepfather','Grandmother','Grandfather','Aunt','Uncle','Adult sibling','Other'],g.relationship||'Select…',`po_g${i}_rel`)}${field('Date of birth',g.dob,'date',false,`po_g${i}_dob`)}${field('Registered WhatsApp / mobile',g.phone,'text',false,`po_g${i}_phone`)}${selectField('Legal decision-making authority',['Select…','Yes','No'],g.legalAuthority||'Select…',`po_g${i}_auth`)}${selectField('Currently working?',['Select…','Yes','No'],g.working||'Select…',`po_g${i}_work`)}${field('Workplace / company name',g.company,'text',false,`po_g${i}_company`)}</div></div>`}
function pickupCard(p,i,caseId){return `<div class="card flat" style="margin-bottom:10px"><h3>Authorised pickup person ${i+1}</h3><div class="form-grid">${field('Full name',p.name,'text',false,`po_p${i}_name`)}${selectField('Relationship',['Select…','Mother','Father','Stepmother','Stepfather','Grandmother','Grandfather','Aunt','Uncle','Adult sibling','Other relative','Family friend','Neighbour','Nanny or caregiver','Driver','Other'],p.relationship||'Select…',`po_p${i}_rel`)}</div><div class="field"><label>Pickup verification photo</label>${p.photo?`<div class="notice ok">Attached · ${esc(p.photoName||'verification-photo.jpg')}</div>`:''}<input type="file" accept="image/*" onchange="markPickupPhoto('${caseId}',${i},this.files[0]?.name)"></div></div>`}
function renderParentOnboarding(){let id=ui().parentOnboardingCase,c=db.admissions[id];if(!c){ui().route='admissions';save();return renderAdmissions()}let o=ensureOnboarding(id),d=o.draft,s=ui().parentOnboardingStep,body='';if(s===1)body=`${notice('Admissions information is prefilled. Complete or confirm the remaining pre-start family details.','info')}<div class="form-grid">${field('Child full legal name',d.child.legalName,'text',false,'po_legal')}${field('Preferred / called name',d.child.preferred,'text',false,'po_pref')}${field('Date of birth',d.child.dob,'date',false,'po_dob')}${selectField('Gender',['Select…','Male','Female'],d.child.gender||'Select…','po_gender')}${field('Residential address',d.child.address,'text',false,'po_address')}<div class="field"><label>Primary language(s) spoken at home</label><div class="check-stack">${['Sinhala','English','Tamil'].map(x=>`<label class="check-row"><input data-home-language type="checkbox" value="${x}" ${checked((Array.isArray(d.child.languages)?d.child.languages:[d.child.languages]).includes(x))}> ${x}</label>`).join('')}</div></div></div>${selectField('Does the child have siblings?',['Select…','Yes','No'],d.child.hasSiblings||'Select…','po_has_siblings')}${d.child.hasSiblings==='Yes'?`<div class="section-title">Siblings</div>${d.child.siblings.map((x,i)=>`<div class="form-grid">${selectField(`Sibling ${i+1} relationship`,['Brother','Sister'],x.relationship,`po_sib${i}_rel`)}${field('Sibling date of birth',x.dob,'date',false,`po_sib${i}_dob`)}</div>`).join('')}${btn('+ Add sibling',`syncOnboarding('${id}',1);addSibling('${id}')`,'secondary','sm')}`:''}`;if(s===2)body=`${d.guardians.map(guardianCard).join('')}${btn('+ Add another guardian',`syncOnboarding('${id}',2);addGuardian('${id}')`,'secondary','sm')}<div class="section-title">Legal arrangements</div>${selectField('Are there any legal restrictions or special arrangements we should know about?',['Select…','No','Yes — provide details'],d.legalRestrictions?.answer||'Select…','po_legal_restrict')}${textArea('Details when Yes',d.legalRestrictions?.details||'','po_legal_details')}`;if(s===3)body=`<h3>Emergency contact</h3><div class="form-grid">${field('Name',d.emergency.name,'text',false,'po_em_name')}${selectField('Relationship',['Select…','Mother','Father','Stepmother','Stepfather','Grandmother','Grandfather','Aunt','Uncle','Adult sibling','Other'],d.emergency.relationship||'Select…','po_em_rel')}${field('Phone',d.emergency.phone,'text',false,'po_em_phone')}</div><div class="section-title">Authorised pickup people</div>${d.pickup.map((p,i)=>pickupCard(p,i,id)).join('')}${btn('+ Add pickup person',`syncOnboarding('${id}',3);addPickup('${id}')`,'secondary','sm')}`;if(s===4)body=`${selectField('Allergies',['Select…','No','Yes'],d.health.allergies||'Select…','po_allergy')}${field('Allergy details when Yes',d.health.allergyDetails,'text',false,'po_allergy_detail')}${selectField('Medical conditions',['Select…','No','Yes'],d.health.conditions||'Select…','po_conditions')}${field('Medical condition details when Yes',d.health.conditionDetails||'','text',false,'po_condition_detail')}${selectField('Regular medication',['Select…','No','Yes'],d.health.medication||'Select…','po_medication')}${field('Medication details when Yes',d.health.medicationDetails||'','text',false,'po_medication_detail')}${selectField('Dietary restrictions relevant to care',['Select…','No','Yes'],d.health.dietary||'Select…','po_dietary')}${field('Dietary details when Yes',d.health.dietaryDetails||'','text',false,'po_dietary_detail')}${field('Emergency medical instructions (if applicable)',d.health.emergencyInstructions||'','text',false,'po_emergency_medical')}${selectField("Anything else about your child's health or care?",['Select…','No','Yes'],d.health.other||'Select…','po_other')}${field('Other health / care details when Yes',d.health.otherDetails||'','text',false,'po_other_detail')}${notice('This submission is parent-provided evidence. It does not overwrite authoritative Health until staff review.','warn')}`;if(s===5)body=`${selectField('Is it okay if your child appears in photos we post on our Facebook page?',['Select…','Yes, that\'s okay','No, please don\'t include my child'],d.facebook||'Select…','po_facebook')}<div class="field"><label>Who should receive communications from ${ORG}?</label>${d.guardians.filter(g=>g.legalAuthority==='Yes').map(g=>`<label class="check-row"><input data-recipient type="checkbox" value="${esc(g.name)}" ${checked(d.recipients.includes(g.name))}> ${esc(g.name)}</label>`).join('')}</div><div class="field"><label>Birth certificate copy</label>${d.documents.birthCertificate?`<div class="notice ok">Attached · ${esc(d.documents.birthCertificateFile||'birth-certificate.pdf')}</div>`:''}<input type="file" accept=".pdf,.jpg,.jpeg,.png" onchange="markParentDocUploaded('${id}',this.files[0]?.name)"></div>${kv('Agreed daycare arrangement',c.service)}${selectField('Uniform size',['Select size…','Size 22','Size 24','Size 26','Size 28'],d.starter.uniform||'Select size…','po_uniform')}${selectField('Books / accessories status',['Pending collection','Collected'],d.starter.books,'po_books')}`;return `<div class="parent-view"><div class="parent-card"><div class="parent-brand"><strong>${ORG}</strong><p>New Family Onboarding · secure link · no parent account</p></div><div class="parent-content"><div class="stepper">${[1,2,3,4,5].map(i=>`<span class="${s>=i?'active':''}"></span>`).join('')}</div><div class="eyebrow">${esc(c.childName)} · pre-start</div><h2 style="color:var(--navy);font-size:20px;margin:5px 0 12px">${['Child & family','Guardians','Emergency & pickup','Health','Consent & starter'][s-1]}</h2>${body}<div class="parent-foot">${btn(s===1?'Back to MPS':'Back',s===1?`ui().route='admissions';ui().admissionsTab='prestart';save();render()`:`onboardingBack('${id}')`,'secondary')}${btn(s===5?'Submit onboarding':'Continue',s===5?`submitOnboarding('${id}')`:`onboardingNext('${id}')`,'primary')}</div></div></div></div>`}

function todayActions(){let a=[];let dilan=db.attendance.dilan;if(dilan&&dilan.status==='present'&&dilan.temporaryPickup&&classInScope(dilan.className))a.push({sev:'red',icon:'!',title:'Dilan Jayasinghe still checked in',sub:'Temporary pickup instruction active · verify collector before handover',go:"setRoute('attendance')"});let sen=db.admissions.senuri;if(admissionDerived(sen).status==='Fee overdue'&&has('Admissions'))a.push({sev:'amber',icon:'₨',title:'Senuri Peris · admission fee overdue',sub:'Admissions decision required — Extend, Waive or Release place',go:"ui().admissionsCase='senuri';setRoute('admissions')"});let hu=Object.values(db.health.updates).find(x=>x.status==='pending');if(hu&&has('Head Teacher'))a.push({sev:'amber',icon:'♥',title:'Health update awaiting review',sub:`${hu.childName} · parent submitted new medical information`,go:"setRoute('health')"});let n=db.admissions.nethmi;if(admissionDerived(n).stage==='Tour'&&has('Admissions'))a.push({sev:'blue',icon:'◎',title:'Nethmi Silva · admissions follow-up due',sub:'Tour completed · family wants to proceed',go:"ui().admissionsCase='nethmi';setRoute('admissions')"});let p=currentPersona();if(has('Accounts')){let pend=Object.values(db.billing.payments).find(x=>x.status==='pending');if(pend)a.push({sev:'amber',icon:'₨',title:'Payment awaiting verification',sub:`${money(pend.amount)} · ${pend.reference}`,go:"setRoute('billing')"})}return a}
function renderToday(){let p=currentPersona(),actions=todayActions();
  if(has('Social Media')&&!has('Head Teacher')){let assets=Object.values(db.media.approvedAssets);return shell(`${pageHead('Today',`Good afternoon, ${p.name.split(' ')[0]}`,'Your MPS view contains approved public-safe assets only.')}<div class="metric-row"><div class="metric"><strong>${assets.length}</strong><span>Approved assets</span><small>Available for publishing</small></div></div><div class="section-title">Approved assets</div>${assets.length?approvedAssets():`<div class="card"><p>No approved MarketingAssets are currently available. Private child photos, nominations, profiles, Health and assessment data are not exposed to this persona.</p></div>`}`)}
  if(has('Accounts')){let invs=Object.values(db.billing.invoices),out=invs.filter(i=>i.status==='issued').reduce((sum,i)=>sum+invoiceOutstanding(i),0);return shell(`${pageHead('Today',`Good afternoon, ${p.name.split(' ')[0]}`,'Finance-only action view. Child Health, teaching and private media are outside this persona.')}<div class="metric-row"><div class="metric"><strong>${money(out)}</strong><span>Outstanding</span><small>Issued balances</small></div><div class="metric"><strong>${invs.filter(i=>invoiceStatus(i).text==='Overdue').length}</strong><span>Overdue</span><small>Staff-led follow-up</small></div><div class="metric"><strong>${Object.values(db.billing.payments).filter(x=>x.status==='pending').length}</strong><span>Payments to verify</span><small>Real-source check</small></div><div class="metric"><strong>${invs.filter(i=>i.status==='draft').length}</strong><span>Draft invoices</span><small>Editable before issue</small></div></div><div class="section-title">Needs your attention</div>${actions.length?actions.map(x=>`<div class="action-card warning"><div class="icon">${x.icon}</div><div class="grow"><strong>${x.title}</strong><span>${x.sub}</span></div>${btn('Open',x.go,'secondary','sm')}</div>`).join(''):'<div class="card"><p>No finance actions waiting.</p></div>'}`)}
  if(has('System Administration')){return shell(`${pageHead('Today',`Good afternoon, ${p.name.split(' ')[0]}`,'Organisation access and recovery work only; operational child data is not automatically exposed.')}<div class="metric-row"><div class="metric"><strong>${Object.values(db.staff.accounts).filter(x=>x.status==='active').length}</strong><span>Active accounts</span><small>Personal identities</small></div><div class="metric"><strong>${Object.values(db.staff.accounts).filter(x=>x.status==='inactive').length}</strong><span>Inactive</span><small>Historical attribution retained</small></div></div><div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Access governance</h3><p>Permission bundles are additive. One person uses one account; responsibilities do not require role switching.</p></div><div class="span-6 card"><h3>Recovery</h3><p>Ordinary staff → System Administrator reset. Last/only administrator → configured secure recovery; platform break-glass requires ownership/control verification.</p></div></div>`)}
  let present=Object.values(db.attendance).filter(x=>x.status==='present').length;let daycareCount=Object.values(db.daycare.bookings).filter(x=>x.date===TODAY).length;return shell(`${pageHead('Today',`Good afternoon, ${p.name.split(' ')[0]}`,'One personalised operational view built from the permission bundles on this account.')}<div class="metric-row"><div class="metric"><strong>${present}</strong><span>Children present</span><small>Physical-presence truth</small></div><div class="metric"><strong>${daycareCount}</strong><span>Daycare today</span><small>Authorised bookings</small></div><div class="metric"><strong>${actions.length}</strong><span>Needs action</span><small>Source-backed work</small></div><div class="metric"><strong>2</strong><span>Lessons today</span><small>Assigned teaching scope</small></div></div><div class="section-title">Today at ${ORG}</div><div class="grid"><div class="span-8 card soft-blue"><div class="card-header"><div class="grow"><h3>🚩 International Flags Day</h3><p>Whole preschool · staff-created calendar event · Normal Preschool Day</p></div>${badge('Context','blue')}</div><p>Planning context only. It does not change operating-day truth or invent a lesson.</p></div><div class="span-4 card"><h3>🎂 Birthday</h3><p>Amaya Perera · derived from DOB. Calm context, not an alert.</p></div></div><div class="section-title">Needs your attention</div>${actions.length?`<div class="grid">${actions.map(x=>`<div class="span-6 action-card ${x.sev==='amber'?'warning':''}"><div class="icon">${x.icon}</div><div class="grow"><strong>${x.title}</strong><span>${x.sub}</span></div>${btn('Open',x.go,'secondary','sm')}</div>`).join('')}</div>`:`<div class="card"><p>No unresolved action items.</p></div>`}<div class="section-title">Teaching today</div>${todayTeachingCard()}`)}
function todayTeachingCard(){let w=db.curriculum.weeks.baby['2026-09-14'],a=w.days.Mon[0],lib=db.curriculum.library[a.libId];return `<div class="grid"><div class="span-7 card"><div class="card-header"><div class="grow"><h3>Baby Class · ${lib.title}</h3><p>09:30 · ${lib.materials}</p></div>${badge(a.delivery?'Recorded':w.published?'Published':'Plan not yet published',a.delivery?'green':w.published?'blue':'amber')}</div><div class="chips"><span class="chip">Official learning area: ${lib.officialArea}</span><span class="chip">${lib.sourceType}</span></div><div style="margin-top:12px">${w.published?btn('Open teaching card',"ui().lessonClass='baby';ui().lessonWeek='2026-09-14';setRoute('lesson-today')",'primary'):btn('Open week plan',"ui().lessonClass='baby';ui().lessonWeek='2026-09-14';setRoute('lessons')",'secondary')}</div>${!w.published?notice('This plan is not yet published, so it is not available as an approved teaching card.','warn'):''}</div><div class="span-5 card"><h3>Persistent safety context</h3><p><strong>Amaya Perera · Peanut allergy</strong><br>Visible where care requires it. It is not a permanent red Today alert.</p></div></div>`}

function currentWeek(){return db.curriculum.weeks[ui().lessonClass][ui().lessonWeek]}
function className(){return ui().lessonClass==='baby'?'Baby Class':'Upper Class'}
function weekKeys(){return Object.keys(db.curriculum.weeks[ui().lessonClass]).sort()}
function changeLessonClass(v){ui().lessonClass=v;let keys=Object.keys(db.curriculum.weeks[v]).sort();if(!keys.includes(ui().lessonWeek))ui().lessonWeek=keys[1]||keys[0];save();render()}
function changeWeek(delta){let keys=weekKeys(),i=keys.indexOf(ui().lessonWeek),n=Math.max(0,Math.min(keys.length-1,i+delta));ui().lessonWeek=keys[n];save();render()}
function planActivityByUid(uid){for(let cls of Object.keys(db.curriculum.weeks))for(let wk of Object.values(db.curriculum.weeks[cls]))for(let day of Object.keys(wk.days)){let a=wk.days[day].find(x=>x.uid===uid);if(a)return {a,wk,day}}return null}
function renderLessons(){let w=currentWeek();let classControl=has('Head Teacher')?selectField('Class',['Baby Class','Upper Class'],className(),'lessonClassSelect',`changeLessonClass(this.value==='Baby Class'?'baby':'upper')`):kv('Assigned class',className());let publishAction=!w.published?(has('Head Teacher')?btn('Publish week',"publishWeek()",'primary','sm'):badge('Awaiting Head Teacher publication','amber')):btn('Published',"openModal('published-info')",'success','sm');return shell(`${pageHead('Curriculum engine','Lessons & curriculum','Plan from structured framework context, reuse activities, teach from Today, and let evidence flow downstream.')}<div class="lesson-layout"><div class="focus-panel card"><div class="eyebrow">Planning context</div><h3>${className()}</h3>${classControl}<div class="section-title">Official source</div>${kv('Curriculum pack',db.curriculum.official.version)}${kv('Learning area',`<strong>${w.officialArea}</strong> ${prov('Official Teacher Guide structure','reused')}`)}${notice(`<strong>MPS teacher-friendly summary</strong><br>${esc(w.summary.replace('Teacher-friendly MPS summary: ',''))}`,'info')}${notice('MPS keeps official source structure, teacher-friendly summaries and preschool-created activity/adaptation text visually distinct.','ok')}</div><div class="lesson-main"><div class="card"><div class="card-header"><div class="grow"><h3>${w.label}</h3><p>${w.published?`Published by ${w.approvedBy||'Head Teacher'}`:'Working plan · not yet published'}</p></div>${badge(w.published?'Published':'Draft',w.published?'green':'amber')}</div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;margin-bottom:10px">${btn('‹ Previous',"changeWeek(-1)",'secondary','sm')}${btn('Next ›',"changeWeek(1)",'secondary','sm')}<span style="flex:1"></span>${publishAction}</div><div class="tabs"><button class="tab ${ui().lessonTab==='week'?'active':''}" onclick="setLessonTab('week')">Week plan</button><button class="tab ${ui().lessonTab==='evidence'?'active':''}" onclick="setLessonTab('evidence')">Evidence & progress</button><button class="tab ${ui().lessonTab==='library'?'active':''}" onclick="setLessonTab('library')">Activity library</button></div>${ui().lessonTab==='week'?renderWeekBoard(w):ui().lessonTab==='evidence'?renderLessonEvidence():renderActivityLibrary()}</div></div></div>`)}
function renderWeekBoard(w){let days=['Mon','Tue','Wed','Thu','Fri'];return `<div class="week-board">${days.map(day=>`<div class="day-col"><div class="day-head"><strong>${day}</strong><span>${w.days[day].length} activities</span></div>${w.days[day].map(a=>activityCard(a,day)).join('')||'<div class="empty">No activity yet</div>'}<div style="margin-top:8px">${btn('+ Add activity',`openDrawer('activity-library',{day:'${day}'})`,'secondary','sm')}</div></div>`).join('')}</div>`}
function activityCard(a,day){let lib=db.curriculum.library[a.libId];return `<div class="lesson-card"><div class="title">${esc(lib.title)}</div><div class="meta">${lib.sourceType} · mapped to <strong>${lib.officialArea}</strong></div>${a.adaptation?`<div class="notice info"><strong>Teacher adaptation</strong><br>${esc(a.adaptation)}</div>`:''}<div class="materials"><span class="material">${esc(lib.materials)}</span></div><div style="display:flex;gap:5px;flex-wrap:wrap;margin-top:8px">${btn('Open / adapt',`openDrawer('activity-detail',{uid:'${a.uid}'})`,'secondary','sm')}${a.delivery?badge(a.delivery,'green'):''}</div></div>`}
function renderActivityLibrary(){return `<div class="grid">${Object.values(db.curriculum.library).map(lib=>`<div class="span-6 lesson-card"><div class="title">${lib.title}</div><div class="meta">${lib.sourceType}</div>${kv('Mapped official learning area',lib.officialArea)}<p>${esc(lib.summary)}</p><div class="materials"><span class="material">${esc(lib.materials)}</span></div><div style="margin-top:8px">${btn('Add to Monday',`addActivity('Mon','${lib.id}')`,'primary','sm')}</div></div>`).join('')}</div>`}
function publishWeek(){if(!has('Head Teacher')){alert('Only an authorised Head Teacher can publish the weekly plan.');return}let w=currentWeek();w.published=true;w.approvedBy=currentPersona().name;w.publishedAt=new Date().toISOString();save();render()}
function addActivity(day,libId){let w=currentWeek();let uid='pa_'+Date.now();w.days[day].push(planAct(libId,uid));ui().lessonTab='week';ui().drawer=null;save();render()}
function saveAdaptation(uid){let p=planActivityByUid(uid);if(!p)return;let t=val('adaptationText');p.a.adaptation=t;ui().drawer=null;save();render()}
function currentTeachingActivity(){let w=currentWeek();let days=['Mon','Tue','Wed','Thu','Fri'];for(let d of days)if(w.days[d].length)return {w,day:d,a:w.days[d][0],lib:db.curriculum.library[w.days[d][0].libId]};return null}
function renderLessonToday(){let x=currentTeachingActivity();if(x&&!x.w.published)return shell(`${pageHead('Teaching','No published teaching card','This week is still a draft. Publish the approved week before teachers use it from Today.',btn('Open week plan',"setRoute('lessons')",'primary'))}<div class="card soft-amber"><h3>Draft week</h3><p>Teachers should not be asked to teach from an unpublished plan.</p></div>`);if(!x)return shell(`${pageHead('Teaching','Today’s activity','No activity planned for this selected week.')}<div class="card">No activity</div>`);let {w,a,lib,day}=x;return shell(`${pageHead('Teaching',`${className()} · ${lib.title}`,`${w.label} · ${day} · materials and curriculum context already carried forward.`,btn('Back to week',"setRoute('lessons')",'secondary'))}<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>${lib.title}</h3><p>${lib.materials}</p></div>${badge(a.delivery||'Planned',a.delivery?'green':'blue')}</div>${kv('Official learning area',`${lib.officialArea} ${prov('Official structure','reused')}`)}${kv('Teacher-friendly MPS summary',lib.summary)}${a.adaptation?kv('Teacher adaptation',esc(a.adaptation)):''}<div class="section-title">Record delivery</div><div class="delivery">${['Done','Changed','Not done'].map(o=>`<button class="${a.delivery===o?'active':''}" onclick="recordDelivery('${a.uid}','${o}')">${o}</button>`).join('')}</div>${a.delivery?`<div class="section-title">Meaningful evidence</div><div style="display:flex;gap:8px;flex-wrap:wrap">${btn('Add observation',`openModal('observation',{uid:'${a.uid}'})`,'primary')}${btn('Assess selected children',`openModal('assessment',{uid:'${a.uid}'})`,'secondary')}</div>`:''}</div><div class="span-4 card"><h3>Why this is lightweight</h3><p>No lesson transcription. No compulsory full-class scoring. One delivery outcome, then only evidence worth keeping.</p><div style="margin-top:12px">${btn('See evidence chain',"ui().lessonTab='evidence';setRoute('lessons')",'secondary')}</div></div></div>`)}
function recordDelivery(uid,outcome){let p=planActivityByUid(uid);p.a.delivery=outcome;p.a.deliveredAt=new Date().toISOString();save();render()}
function saveObservation(uid){let p=planActivityByUid(uid),lib=db.curriculum.library[p.a.libId],name=val('obs_child'),child={'Amaya Perera':'amaya','Imani de Alwis':'imani','Ruvin Bandara':'ruvin'}[name],id='obs_'+Date.now();db.observations[id]={id,childId:child,childName:name,date:TODAY,activityUid:uid,activityTitle:lib.title,officialArea:lib.officialArea,text:val('obs_text'),visibility:val('obs_visibility'),photo:val('obs_photo')==='Attach 1 photo',source:'Teaching record'};ui().modal=null;save();render()}
function saveAssessment(uid){let p=planActivityByUid(uid),lib=db.curriculum.library[p.a.libId];['amaya','imani','ruvin','kavindu'].forEach(cid=>{let v=val('ass_'+cid);if(v){let id='ass_'+cid+'_'+Date.now();db.assessments[id]={id,childId:cid,childName:{amaya:'Amaya Perera',imani:'Imani de Alwis',ruvin:'Ruvin Bandara',kavindu:'Kavindu Silva'}[cid],date:TODAY,activityUid:uid,activityTitle:lib.title,officialArea:lib.officialArea,result:v,source:'Selective assessment'}}});ui().modal=null;save();render()}
function renderLessonEvidence(){let obs=Object.values(db.observations),ass=Object.values(db.assessments);return `<div class="evidence-chain"><div class="card flat"><h3>Teaching evidence</h3>${obs.map(o=>`<div class="child-row"><strong>${o.childName}</strong><span>${badge('Observation','blue')}</span><span>${esc(o.text)}</span><span>✓</span></div>`).join('')||'<div class="empty">No observations yet</div>'}</div><div class="hide-chain-mobile" style="display:grid;place-items:center">→</div><div class="card flat"><h3>Progress & reports</h3><p>These records are already organised by child and mapped learning-area context.</p>${obs.map(o=>`<div class="child-row"><strong>${o.childName}</strong><span>${badge(o.officialArea,'green')}</span><span>${o.visibility==='Parent-eligible candidate'?'Report candidate':'Internal evidence'}</span><span>${btn('Open',`openDrawer('child-progress',{childId:'${o.childId}'})`,'secondary','sm')}</span></div>`).join('')}${ass.map(a=>`<div class="child-row"><strong>${a.childName}</strong><span>${badge('Assessment '+a.result,'purple')}</span><span>${a.officialArea}</span><span>✓</span></div>`).join('')}</div></div>`}

function renderAttendance(){let rows=Object.values(db.attendance).filter(r=>classInScope(r.className));let present=rows.filter(x=>x.status==='present').length;return shell(`${pageHead('Physical presence','Attendance & pickup','One attendance truth: real arrival, safe handover, then checkout. Corrections preserve history.',btn('Rapid arrival',"openModal('rapid-arrival')",'primary'))}<div class="metric-row"><div class="metric"><strong>${present}</strong><span>Present</span><small>Checked in now</small></div><div class="metric"><strong>${rows.filter(x=>x.status==='absent').length}</strong><span>Absent</span><small>Truthful absence</small></div><div class="metric"><strong>${rows.filter(x=>x.status==='checked_out').length}</strong><span>Checked out</span><small>Safe handovers recorded</small></div><div class="metric"><strong>${rows.filter(x=>x.temporaryPickup&&x.status==='present').length}</strong><span>Temporary pickup</span><small>Needs verification</small></div></div><div class="section-title">Today</div><div class="table-wrap"><table class="table"><thead><tr><th>Child</th><th>Class</th><th>Status</th><th>Arrival</th><th>Collector / checkout</th><th></th></tr></thead><tbody>${rows.map(r=>`<tr><td><div class="name">${r.name}</div></td><td>${r.className}</td><td>${badge(r.status.replace('_',' '),r.status==='present'?'green':r.status==='absent'?'grey':'blue')}</td><td>${r.checkIn||'—'}</td><td>${r.collector?`${r.collector} · ${r.checkOut}`:r.temporaryPickup&&r.status==='present'?badge('Temporary instruction','amber'):'—'}</td><td>${r.id==='dilan'&&r.status==='present'?btn('Verify temp pickup',`openModal('temporary-pickup',{childId:'dilan'})`,'primary','sm'):r.status==='present'?btn('Checkout',`openModal('checkout',{childId:'${r.id}'})`,'secondary','sm'):''}</td></tr>`).join('')}</tbody></table></div><div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Correction history</h3><p>Amaya has one audited arrival-time correction.</p><div style="margin-top:9px">${btn('Inspect correction',"openModal('attendance-correction',{childId:'amaya'})",'secondary','sm')}</div></div><div class="span-6 card"><h3>Safety rule</h3><p>Never check a child out to clear the screen. If verification is not satisfactory, the child stays checked in and supervised.</p></div></div>`)}
function rapidArrival(){document.querySelectorAll('[data-arrival]:checked').forEach(e=>{let r=db.attendance[e.value];r.status='present';r.checkIn=r.checkIn||new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'})});closeOverlay()}
function checkout(childId,temp=false){let r=db.attendance[childId];r.status='checked_out';r.checkOut=new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'});r.collector=temp?r.temporaryPickup.name:val('collectorSelect')||'Authorised collector';closeOverlay()}

function daycareRoster(){return Object.values(db.daycare.bookings).filter(b=>b.date===TODAY)}
function renderDaycare(){let roster=daycareRoster();return shell(`${pageHead('Extended care','Daycare','Bookings create the roster; physical attendance remains the single presence truth.',btn('Add ad-hoc booking',"openModal('daycare-booking')",'primary'))}<div class="metric-row"><div class="metric"><strong>${roster.length}</strong><span>Booked today</span><small>Derived roster</small></div><div class="metric"><strong>${db.daycare.capacity-roster.length}</strong><span>Places available</span><small>Configured capacity ${db.daycare.capacity}</small></div><div class="metric"><strong>${Object.keys(db.daycare.careRecords).length}</strong><span>Care records</span><small>Recorded today</small></div><div class="metric"><strong>${Object.values(db.daycare.latePickups).filter(x=>x.status==='pending').length}</strong><span>Late pickup review</span><small>Human decision required</small></div></div><div class="section-title">Today’s roster</div><div class="table-wrap"><table class="table"><thead><tr><th>Child</th><th>Care</th><th>Presence</th><th>Meal / rest / activity</th><th></th></tr></thead><tbody>${roster.map(b=>{let att=db.attendance[b.childId],cr=db.daycare.careRecords[b.childId];return `<tr><td><div class="name">${b.childName}</div></td><td>${b.care}</td><td>${att?badge(att.status,att.status==='present'?'green':'grey'):badge('not checked in','grey')}</td><td>${cr?`${cr.meal} · ${cr.rest} · ${cr.activity}`:'Not recorded'}</td><td>${att?.status==='present'?btn(cr?'Edit care':'Record care',`openModal('care-entry',{childId:'${b.childId}'})`,'secondary','sm'):badge('Not present','grey')}</td></tr>`}).join('')}</tbody></table></div><div class="section-title">Operational review</div>${Object.values(db.daycare.latePickups).map(lp=>`<div class="card soft-amber"><div class="card-header"><div class="grow"><h3>Late pickup · ${lp.childName}</h3><p>${lp.actual} checkout · ${lp.minutesBeyond} min beyond 15-minute grace</p></div>${badge(lp.status,lp.status==='pending'?'amber':lp.status==='approved'?'green':'grey')}</div>${lp.status==='pending'?btn('Review',`openModal('late-pickup',{id:'${lp.id}'})`,'primary','sm'):kv('Decision',lp.status==='approved'?`Approved · ${money(lp.amount)} sent to Billing review`:`Waived · ${esc(lp.decisionReason||'')}`)}</div>`).join('')}`)}
function authoriseDaycareBooking(){let childId=val('db_child'),care=val('db_care'),date=val('db_date')||TODAY;let roster=Object.values(db.daycare.bookings).filter(b=>b.date===date);if(roster.length>=db.daycare.capacity){alert('Daycare capacity is full for this date.');return}if(roster.some(b=>b.childId===childId)){alert('This child already has an authorised daycare booking for this date.');return}let names={amaya:'Amaya Perera',ruvin:'Ruvin Bandara',kavindu:'Kavindu Silva',imani:'Imani de Alwis'};db.daycare.bookings['bk_'+childId+'_'+Date.now()]={id:'bk_'+Date.now(),childId,childName:names[childId],date,care,recurring:false};closeOverlay()}
function saveCareRecord(childId){db.daycare.careRecords[childId]={meal:val('care_meal'),rest:val('care_rest'),activity:val('care_activity'),participation:val('care_participation'),note:val('care_note'),at:new Date().toISOString()};closeOverlay()}
function decideLatePickup(id,decision){let lp=db.daycare.latePickups[id];lp.status=decision;lp.decisionReason=val('lp_reason')||'';if(decision==='approved'){db.billing.pendingCharges[id]={id,childId:lp.childId,childName:lp.childName,description:`Late pickup · ${TODAY} · actual ${lp.actual}`,amount:lp.amount,status:'proposed',source:'LatePickupEvent '+id}}closeOverlay()}

function renderHealth(){let privileged=has('Head Teacher');if(!privileged){return shell(`${pageHead('Health & safety','Health & safety','Only the safety context needed for your role is visible here; authoritative Health review and medication authorisation stay restricted.',btn('New incident',"openModal('incident')",'primary'))}<div class="grid"><div class="span-6 card"><h3>Relevant care context</h3>${kv('Amaya Perera','Peanut allergy')}${kv('Instruction','Avoid peanut exposure; follow current family/medical instructions.')}${notice('Parent updates and authoritative Health editing are not available to this permission set.','info')}</div><div class="span-6">${healthIncidents()}</div></div>`)}let tab=ui().healthTab;let tabs=`<div class="tabs"><button class="tab ${tab==='updates'?'active':''}" onclick="setHealthTab('updates')">Health review</button><button class="tab ${tab==='medication'?'active':''}" onclick="setHealthTab('medication')">Medication</button><button class="tab ${tab==='incidents'?'active':''}" onclick="setHealthTab('incidents')">Incidents</button></div>`;let body=tab==='updates'?healthUpdates():tab==='medication'?healthMedication():healthIncidents();return shell(`${pageHead('Health & safety','Health & safety','One authoritative Health truth; parent input, medication authority and incidents remain separate workflows.',btn('New incident',"openModal('incident')",'primary'))}${tabs}${body}`)}
function healthUpdates(){let ups=Object.values(db.health.updates);return `<div class="grid"><div class="span-7 card"><h3>Parent updates awaiting review</h3>${ups.map(u=>`<div class="child-row"><strong>${u.childName}</strong><span>${badge(u.status,u.status==='pending'?'amber':'green')}</span><span class="hide-mobile">${u.summary}</span><span>${u.status==='pending'?btn('Review',`openModal('health-update',{id:'${u.id}'})`,'primary','sm'):'✓'}</span></div>`).join('')||'<div class="empty">No pending updates.</div>'}</div><div class="span-5 card"><h3>Authoritative profile example</h3>${kv('Amaya Perera','Peanut allergy')}${kv('Source','Confirmed family / authorised review')}${notice('Accounts and Social Media personas cannot access this route.','info')}</div></div>`}
function healthMedication(){let auth=db.health.medAuth.minoli;return `<div class="grid"><div class="span-7 card"><div class="card-header"><div class="grow"><h3>Minoli Fernando · prescribed inhaler</h3><p>Administration is allowed only while the authorisation is current.</p></div>${badge(auth.status,auth.status==='current'?'green':'red')}</div>${kv('Instruction',auth.instruction)}${kv('Authorised by',auth.authorisedBy)}${kv('Updated',auth.updated)}<div style="display:flex;gap:8px;flex-wrap:wrap">${auth.status==='current'?btn('Record administration',"openModal('medication',{authId:'ma1'})",'primary'):''}${btn(auth.status==='current'?'Replace authorisation':'Create current authorisation',"openModal('med-authorisation',{mode:'replace'})",'secondary')}${auth.status==='current'?btn('Withdraw',"withdrawMedicationAuth()",'danger'):''}</div></div><div class="span-5 card"><h3>Administration history</h3>${db.health.administrations.length?db.health.administrations.map(a=>`<div class="child-row"><strong>${a.childName}</strong><span>${badge(a.outcome,a.outcome==='Administered'?'green':'amber')}</span><span>${a.time}</span><span>✓</span></div>`).join(''):'<div class="empty">No administrations recorded in this prototype state.</div>'}</div></div>`}
function healthIncidents(){return `<div class="card"><div class="card-header"><div class="grow"><h3>Incident register</h3><p>Care first; factual record, guardian contact and follow-up.</p></div>${btn('New incident',"openModal('incident')",'primary','sm')}</div>${db.health.incidents.length?db.health.incidents.map(i=>`<div class="child-row"><strong>${i.category}</strong><span>${badge(i.status,'amber')}</span><span>${esc(i.what)}</span><span>${btn(i.status==='Closed'?'Closed':'Review',`openModal('incident-review',{id:'${i.id}'})`,'secondary','sm')}</span></div>`).join(''):'<div class="empty">No incidents recorded in this prototype state.</div>'}</div>`}
function confirmHealthUpdate(id){let u=db.health.updates[id];u.status='confirmed';db.health.profiles[u.childId]=db.health.profiles[u.childId]||{};db.health.profiles[u.childId].instructions=u.summary;closeOverlay()}
function withdrawMedicationAuth(){db.health.medAuth.minoli.status='withdrawn';save();render()}
function replaceMedicationAuth(){let a=db.health.medAuth.minoli;a.status='current';a.instruction=val('ma_instruction');a.updated=TODAY;closeOverlay()}
function recordMedication(){let a=db.health.medAuth.minoli;if(a.status!=='current'){alert('No current authorisation.');return}db.health.administrations.push({id:'med_'+Date.now(),childName:'Minoli Fernando',outcome:val('med_outcome'),time:val('med_time'),at:new Date().toISOString()});closeOverlay()}
function saveIncident(){db.health.incidents.push({id:'inc_'+Date.now(),category:val('inc_cat'),what:val('inc_what'),action:val('inc_action'),contact:val('inc_contact'),status:'Submitted',at:new Date().toISOString(),followup:null});closeOverlay()}
function closeIncident(id){let i=db.health.incidents.find(x=>x.id===id);let f=val('inc_followup');if(f==='Open follow-up'){i.status='Reviewed';i.followup='Open';closeOverlay();return}i.status='Closed';i.followup=f;closeOverlay()}
function escalateUncollected(childId){let r=db.attendance[childId];db.health.incidents.push({id:'inc_'+Date.now(),category:'Uncollected Child',what:`${r.name} remains on site after expected collection.`,action:'Child remains supervised and checked in; guardian / Head Teacher contact initiated.',contact:'Not yet contacted',status:'Submitted',at:new Date().toISOString(),followup:'Open'});closeOverlay();setRoute('health');ui().healthTab='incidents';save();render()}

function invoiceTotal(inv){return inv.lines.reduce((s,l)=>s+l.amount,0)}
function invoicePaid(inv){return inv.allocations.reduce((s,a)=>s+a.amount,0)}
function invoiceOutstanding(inv){return Math.max(0,invoiceTotal(inv)-invoicePaid(inv))}
function invoiceStatus(inv){if(inv.status==='draft')return {text:'Draft',tone:'blue'};if(inv.status==='void')return {text:'Voided',tone:'grey'};let out=invoiceOutstanding(inv),paid=invoicePaid(inv);if(out===0)return {text:'Paid',tone:'green'};if(inv.due<TODAY)return {text:paid>0?'Overdue · partially paid':'Overdue',tone:'red'};if(paid>0)return {text:'Partially paid',tone:'amber'};return {text:'Unpaid',tone:'blue'}}
function renderBilling(){let invs=Object.values(db.billing.invoices);let outstanding=invs.filter(i=>i.status==='issued').reduce((s,i)=>s+invoiceOutstanding(i),0);let overdue=invs.filter(i=>invoiceStatus(i).text.startsWith('Overdue')).length;let pendingPay=Object.values(db.billing.payments).filter(p=>p.status==='pending').length;let drafts=invs.filter(i=>i.status==='draft').length;return shell(`${pageHead('Accounts','Billing','Clear invoice states, verified payments and immutable issued history — without becoming a full accounting system.',btn('Create draft invoice',"openModal('draft-invoice',{newDraft:true})",'primary'))}<div class="metric-row"><div class="metric"><strong>${money(outstanding)}</strong><span>Outstanding</span><small>Issued balances</small></div><div class="metric"><strong>${overdue}</strong><span>Overdue</span><small>Staff-led follow-up</small></div><div class="metric"><strong>${pendingPay}</strong><span>Payment to verify</span><small>Real-source verification</small></div><div class="metric"><strong>${drafts}</strong><span>Draft invoices</span><small>Editable before issue</small></div></div><div class="section-title">Invoices</div><div class="table-wrap"><table class="table"><thead><tr><th>Invoice</th><th>Family</th><th>Issued / due</th><th>Total</th><th>Outstanding</th><th>Status</th><th></th></tr></thead><tbody>${invs.map(inv=>{let st=invoiceStatus(inv);return `<tr><td><div class="name">${inv.number}</div></td><td>${inv.childName}</td><td>${inv.status==='draft'?'Draft':`${fmtDate(inv.issued)} / ${fmtDate(inv.due)}`}</td><td>${money(invoiceTotal(inv))}</td><td>${inv.status==='draft'?'—':money(invoiceOutstanding(inv))}</td><td>${badge(st.text,st.tone)}</td><td>${btn(inv.status==='draft'?'Review':'Open',`openModal('invoice-detail',{id:'${inv.id}'})`,'secondary','sm')}</td></tr>`}).join('')}</tbody></table></div><div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Pending payment verification</h3>${Object.values(db.billing.payments).filter(p=>p.status==='pending').map(p=>`<div class="child-row"><strong>${money(p.amount)}</strong><span>${badge(p.method,'blue')}</span><span class="hide-mobile">${p.reference}</span><span>${btn('Verify',`openModal('verify-payment',{id:'${p.id}'})`,'primary','sm')}</span></div>`).join('')||'<div class="empty">No pending payments.</div>'}</div><div class="span-6 card soft-amber"><h3>Pending operational charges</h3>${Object.values(db.billing.pendingCharges).map(pc=>`<div class="child-row"><strong>${pc.childName}</strong><span>${badge(pc.status,pc.status==='proposed'?'amber':'green')}</span><span class="hide-mobile">${pc.description} · ${money(pc.amount)}</span><span>${pc.status==='proposed'?`${btn('Add to next draft',`addChargeToDraft('${pc.id}')`,'primary','sm')}${btn('Standalone draft',`createChargeDraft('${pc.id}')`,'secondary','sm')}`:'✓'}</span></div>`).join('')||'<p>No approved operational charge awaiting Accounts review.</p>'}</div></div>`)}
function createSupplementaryInvoice(id){let pc=db.billing.pendingCharges[id];let nid='inv_sup_'+Date.now();db.billing.invoices[nid]={id:nid,number:'SUPPLEMENTARY-DRAFT',childId:pc.childId,childName:pc.childName,status:'draft',issued:null,due:TODAY,lines:[{id:'l_'+Date.now(),description:pc.description,amount:pc.amount,sourceId:id}],allocations:[],history:[{at:'14 Sep',text:'Supplementary draft created from authorised charge'}],evidence:{}};pc.status='placed';save();render()}
function addChargeToDraft(id){let pc=db.billing.pendingCharges[id],inv=Object.values(db.billing.invoices).find(i=>i.childId===pc.childId&&i.status==='draft');if(!inv){alert('No suitable draft invoice exists. Create a draft or use the standalone-draft action.');return}if(!inv.lines.some(l=>l.sourceId===id))inv.lines.push({id:'l_'+Date.now(),description:pc.description,amount:pc.amount,sourceId:id});pc.status='placed';inv.history.push({at:'14 Sep',text:`Operational charge added from ${pc.source}`});save();render()}
function verifyPayment(id){let p=db.billing.payments[id],inv=Object.values(db.billing.invoices).find(i=>i.childId===p.childId&&i.status==='issued'&&invoiceOutstanding(i)>0);if(!inv){alert('No outstanding issued invoice found.');return}p.status='verified';p.verification=val('pay_verification');p.verifiedBy=currentPersona().name;p.verifiedAt=new Date().toISOString();let amt=Math.min(p.amount,invoiceOutstanding(inv));inv.allocations.push({paymentId:id,amount:amt});p.receipt=`REC-${inv.number}-${id}.pdf`;inv.history.push({at:'14 Sep',text:`Payment verified and allocated · ${money(amt)} · ${p.verification} · receipt ${p.receipt}`});closeOverlay()}
function issueInvoice(id){let inv=db.billing.invoices[id];let unresolved=Object.values(db.billing.pendingCharges).find(pc=>pc.childId===inv.childId&&pc.status==='proposed');if(unresolved){alert('Resolve/add the approved prior-period operational charge before issuing this invoice.');return}inv.status='issued';inv.issued=TODAY;inv.number=inv.number.includes('DRAFT')?'OCT-2026-024':inv.number;inv.evidence.invoicePdf=inv.number+'.pdf';inv.history.push({at:'14 Sep',text:'Invoice issued · immutable PDF snapshot created'});closeOverlay()}
function voidAndReplace(id){let inv=db.billing.invoices[id];if(inv.status!=='issued')return;if(invoicePaid(inv)>0){alert('This invoice has verified allocations. Reverse/reallocate the payment through an authorised finance correction before voiding the invoice.');return}inv.status='void';inv.history.push({at:'14 Sep',text:'Voided for correction · original retained'});let nid='inv_'+Date.now();db.billing.invoices[nid]={id:nid,number:'REPLACEMENT-DRAFT',childId:inv.childId,childName:inv.childName,status:'draft',issued:null,due:inv.due,lines:inv.lines.map(l=>({...l,id:'l_'+Math.random().toString(36).slice(2,7)})),allocations:[],history:[{at:'14 Sep',text:`Replacement draft created from ${inv.number}`}],evidence:{}};closeOverlay()}
function createDraftInvoice(){let map={'Amaya Perera':'amaya','Senuri Peris':'senuri','Nethmi Silva':'nethmi','Ruvin Bandara':'ruvin'},name=val('draft_child'),amount=Math.max(0,Number(val('draft_amount')||0));if(!amount){alert('Enter a valid amount.');return}let id='inv_'+Date.now();db.billing.invoices[id]={id,number:'NEW-DRAFT-'+String(Date.now()).slice(-5),childId:map[name]||name.toLowerCase().replace(/\s+/g,'_'),childName:name,status:'draft',issued:null,due:val('draft_due'),lines:[{id:'l_'+Date.now(),description:val('draft_desc')||'Authorised charge',amount}],allocations:[],history:[{at:'14 Sep',text:'Draft invoice created'}],evidence:{}};closeOverlay()}
function updateDraftInvoice(id){let inv=db.billing.invoices[id];if(!inv||inv.status!=='draft'){alert('Only a draft invoice can be edited.');return}inv.due=val('edit_due');if(!inv.lines.length)inv.lines.push({id:'l_'+Date.now(),description:'Charge',amount:0});inv.lines[0].description=val('edit_desc');inv.lines[0].amount=Math.max(0,Number(val('edit_amount')||0));inv.history.push({at:'14 Sep',text:'Draft invoice edited before issue'});closeOverlay()}
function createChargeDraft(id){let pc=db.billing.pendingCharges[id];if(!pc||pc.status!=='proposed')return;let suitable=Object.values(db.billing.invoices).find(i=>i.childId===pc.childId&&i.status==='draft');if(pc.source?.startsWith('LatePickupEvent')&&suitable){alert('A suitable future draft exists. The approved late-pickup charge should be carried to that draft rather than a standalone invoice.');return}let iid='inv_'+Date.now();db.billing.invoices[iid]={id:iid,number:'SUPPLEMENTARY-DRAFT',childId:pc.childId,childName:pc.childName,status:'draft',issued:null,due:'2026-09-25',lines:[{id:'l_'+Date.now(),description:pc.description,amount:pc.amount,sourceId:id}],allocations:[],history:[{at:'14 Sep',text:`Standalone draft created from ${pc.source}`}],evidence:{}};pc.status='placed';save();render()}

function reportCandidates(){let obs=Object.values(db.observations).filter(o=>o.childId==='amaya'&&o.visibility==='Parent-eligible candidate');let ass=Object.values(db.assessments).filter(a=>a.childId==='amaya'&&!['Not observed','Absent','Not applicable'].includes(a.result));return {obs,ass}}
function renderReports(){let r=db.reports.amaya_sep,c=reportCandidates();let workflow=r.status==='teacher_review'?btn('Teacher review complete',"markReportTeacherReady()",'primary'):r.status==='teacher_ready'?(has('Head Teacher')?btn('Approve exact report',"approveReport()",'primary'):badge('Awaiting Head Teacher approval','amber')):btn('Approved',"openModal('report-preview')",'success');return shell(`${pageHead('Parent reporting','Monthly reports','MPS starts from real evidence. Teachers curate; Head Teacher approves the exact parent-facing version.',btn('Preview PDF',"openModal('report-preview')",'secondary'))}<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Amaya Perera · September</h3><p>Evidence candidates are generated from teaching records.</p></div>${badge(r.status==='approved'?'Approved':r.status==='teacher_ready'?'Head Teacher review':'Teacher review',r.status==='approved'?'green':r.status==='teacher_ready'?'purple':'amber')}</div><div class="section-title">Observation candidates</div>${c.obs.map(o=>`<div class="child-row"><strong>${o.activityTitle}</strong><span>${badge(r.selectedEvidence.includes(o.id)?'Selected':'Available',r.selectedEvidence.includes(o.id)?'green':'blue')}</span><span class="hide-mobile">${esc(o.text.slice(0,64))}</span><span>${btn(r.selectedEvidence.includes(o.id)?'Remove':'+ Add',`toggleReportEvidence('${o.id}')`,'secondary','sm')}</span></div>`).join('')||'<div class="empty">No parent-eligible observation candidates yet.</div>'}<div class="section-title">Assessment context</div>${c.ass.map(a=>`<div class="child-row"><strong>${a.activityTitle}</strong><span>${badge('Progress context','blue')}</span><span class="hide-mobile">Raw rating stays internal</span><span>✓</span></div>`).join('')||'<div class="empty">No selective assessment evidence yet.</div>'}${textArea('Optional teacher note',r.teacherNote,'report_note')}<div style="display:flex;gap:8px;flex-wrap:wrap;margin-top:10px">${workflow}${r.status==='approved'&&!r.sentAt?btn('Record manual Send',"sendReport()",'secondary'):r.sentAt?badge('Sent','green'):''}</div></div><div class="span-4 card"><h3>Delivery</h3>${kv('Recipients','Nadeesha + Kasun')}${kv('Channel','WhatsApp Web · manual')}${kv('Status',r.sentAt?'Sent':r.status==='approved'?'Approved / ready to send':'Not yet approved')}${notice('Manual delivery records Sent only. MPS never guesses Delivered/Read.','info')}</div></div>`)}
function toggleReportEvidence(id){let r=db.reports.amaya_sep,i=r.selectedEvidence.indexOf(id);if(i>=0)r.selectedEvidence.splice(i,1);else r.selectedEvidence.push(id);save();render()}
function markReportTeacherReady(){let r=db.reports.amaya_sep;r.teacherNote=val('report_note');r.status='teacher_ready';save();render()}
function approveReport(){if(!has('Head Teacher')){alert('Only the Head Teacher can approve the exact parent-facing report.');return}let r=db.reports.amaya_sep;r.teacherNote=val('report_note');r.status='approved';r.approvedSnapshot={approvedAt:new Date().toISOString(),approvedBy:currentPersona().name,selectedEvidence:[...r.selectedEvidence],teacherNote:r.teacherNote};save();render()}
function sendReport(){let r=db.reports.amaya_sep;r.sentAt=new Date().toISOString();save();render()}

function renderMedia(){let socialOnly=has('Social Media')&&!has('Head Teacher')&&!has('Class Teacher');let canApprove=has('Head Teacher');if(socialOnly)ui().mediaTab='approved';if(!canApprove&&ui().mediaTab==='review')ui().mediaTab='private';let tabs=socialOnly?`<div class="tabs"><button class="tab active">Approved assets</button></div>`:`<div class="tabs"><button class="tab ${ui().mediaTab==='private'?'active':''}" onclick="setMediaTab('private')">Private library</button>${canApprove?`<button class="tab ${ui().mediaTab==='review'?'active':''}" onclick="setMediaTab('review')">Marketing review</button>`:''}<button class="tab ${ui().mediaTab==='approved'?'active':''}" onclick="setMediaTab('approved')">Approved assets</button></div>`;let body=ui().mediaTab==='review'&&canApprove?marketingReview():ui().mediaTab==='approved'?approvedAssets():privateMedia();let recycle=(has('Head Teacher')||has('System Administration'))?btn('Recycle bin',"openDrawer('recycle-bin')",'secondary'):'';return shell(`${pageHead('Photos & media','Photos & media',socialOnly?'Only approved public-safe MarketingAssets are visible to this persona.':'Private evidence stays private by default. Marketing and deletion are separate decisions.',socialOnly?'':recycle)}${tabs}${body}`)}
function privateMedia(){let photos=Object.values(db.media.photos).filter(p=>!p.deletedAt);return `<div class="media-grid">${photos.map(p=>`<div class="media-card"><div class="media-thumb">◩</div><div class="media-body"><strong>${p.title}</strong><span>${p.visibility} · ${p.date}</span><div class="media-actions">${p.marketing.status==='not_nominated'?btn('Nominate',`nominatePhoto('${p.id}')`,'secondary','sm'):p.marketing.status==='pending'?badge('Marketing review','amber'):p.marketing.status==='approved'?badge('Approved asset','green'):badge(p.marketing.status,'grey')}${btn('Delete',`openModal('delete-photo',{id:'${p.id}'})`,'danger','sm')}</div></div></div>`).join('')}</div>`}
function nominatePhoto(id){let p=db.media.photos[id];p.marketing.status='pending';p.marketing.use='Facebook';ui().mediaTab='review';save();render()}
function marketingReview(){let photos=Object.values(db.media.photos).filter(p=>!p.deletedAt&&p.marketing.status==='pending');return `<div class="card"><h3>Marketing queue</h3>${photos.map(p=>`<div class="child-row"><strong>${p.title}</strong><span>${badge('Awaiting review','amber')}</span><span class="hide-mobile">${p.marketing.use}</span><span>${btn('Review',`openModal('marketing-review',{id:'${p.id}'})`,'primary','sm')}</span></div>`).join('')||'<div class="empty">No items awaiting review.</div>'}</div>`}
function approvedAssets(){let assets=Object.values(db.media.approvedAssets);return `<div class="media-grid">${assets.map(a=>`<div class="media-card"><div class="media-thumb">▧</div><div class="media-body"><strong>${a.title}</strong><span>${a.use} · approved ${a.approvedAt}</span><div class="media-actions">${badge('Public-safe asset','green')}</div></div></div>`).join('')||'<div class="card"><p>No approved MarketingAssets in this prototype state.</p></div>'}</div>`}
function approveMarketing(id){let p=db.media.photos[id];p.marketing.status='approved';p.marketing.decision='Approved';let aid='asset_'+id;db.media.approvedAssets[aid]={id:aid,photoId:id,title:p.title,use:p.marketing.use,approvedAt:'14 Sep 2026',approvedBy:currentPersona().name};closeOverlay()}
function rejectMarketing(id){let p=db.media.photos[id];p.marketing.status='rejected';p.marketing.decision='Rejected for marketing';closeOverlay()}
function deletePhoto(id){let p=db.media.photos[id];p.deletedAt=new Date().toISOString();db.media.recycle[id]={photoId:id,deletedAt:p.deletedAt,deleteAfter:'30 days',reason:val('delete_reason'),hold:p.hold};closeOverlay()}
function restorePhoto(id){db.media.photos[id].deletedAt=null;delete db.media.recycle[id];closeOverlay()}
function permanentDeletePhoto(id){if(db.media.photos[id].hold){alert('Retention hold prevents normal permanent deletion.');return}delete db.media.photos[id];delete db.media.recycle[id];closeOverlay()}

function renderCalendar(){let ex=Object.values(db.calendar.exceptions),events=Object.values(db.calendar.events);return shell(`${pageHead('Organisation calendar','Calendar','Operating-day truth and important-date context stay separate.',`${btn('Operating exception',"openModal('calendar-exception')",'primary')}${btn('Add event',"openModal('calendar-event')",'secondary')}`)}<div class="grid"><div class="span-7 card"><h3>Operating-day exceptions</h3>${ex.map(x=>`<div class="child-row"><strong>${fmtDate(x.date)}</strong><span>${badge(x.type,x.type==='Closed Day'?'red':x.type==='Daycare-Only Day'?'amber':'green')}</span><span class="hide-mobile">${esc(x.reason)}</span><span>${btn('Amend',`openModal('calendar-exception',{id:'${x.id}'})`,'secondary','sm')}</span></div>`).join('')||'<div class="empty">No operating exceptions yet. Annual Mon–Fri baseline remains Normal Preschool Day.</div>'}</div><div class="span-5 card"><h3>Important-date events</h3>${events.map(e=>`<div class="child-row"><strong>${e.title}</strong><span>${fmtDate(e.date)}</span><span class="hide-mobile">${e.scope}</span><span>Context</span></div>`).join('')}</div></div>`)}
function saveCalendarException(id=null){let eid=id||'ex_'+Date.now();let old=db.calendar.exceptions[eid];db.calendar.exceptions[eid]={id:eid,date:val('cal_date'),type:val('cal_type'),reason:val('cal_reason'),history:[...(old?.history||[]),{at:new Date().toISOString(),by:currentPersona().name,type:val('cal_type'),reason:val('cal_reason')}]};closeOverlay()}
function saveCalendarEvent(){let id='evt_'+Date.now();db.calendar.events[id]={id,title:val('evt_title'),date:val('evt_date'),scope:val('evt_scope'),note:val('evt_note')};closeOverlay()}

function renderStaff(){let acc=Object.values(db.staff.accounts);return shell(`${pageHead('Organisation','Staff & access','One real person, one account. Permission bundles are additive; Head Teacher is not automatically System Administrator.',btn('Add staff account',"openModal('staff-account')",'primary'))}<div class="table-wrap"><table class="table"><thead><tr><th>Staff member</th><th>MPS login</th><th>Permission bundles</th><th>Scope</th><th>Status</th><th></th></tr></thead><tbody>${acc.map(a=>`<tr><td><div class="name">${a.name}</div></td><td>${a.username}</td><td>${a.bundles.join(' · ')}</td><td>${a.scope}</td><td>${badge(a.status,a.status==='active'?'green':'grey')}</td><td>${btn(a.status==='active'?'Manage':'History',a.status==='active'?`openModal('manage-access',{id:'${a.id}'})`:`openModal('access-history',{id:'${a.id}'})`,'secondary','sm')}</td></tr>`).join('')}</tbody></table></div><div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Password recovery</h3><p>Ordinary staff → System Administrator reset. Last/only administrator → configured secure recovery. Platform break-glass requires ownership/control verification and is audited.</p></div><div class="span-6 card"><h3>No shared logins</h3><p>Disabling access never removes historical attribution. One real person keeps one MPS identity even when responsibilities change.</p></div></div>`)}
function createStaff(){let name=val('staff_name'),username=val('staff_username'),bundle=val('staff_bundle'),id='staff_'+Date.now();db.staff.accounts[id]={id,name,username,bundles:[bundle],scope:val('staff_scope')||'All',status:'active'};db.staff.history.push({at:new Date().toISOString(),text:`Account ${username} created with ${bundle}`});closeOverlay()}
function saveAccess(id){let a=db.staff.accounts[id];a.bundles=Array.from(document.querySelectorAll('[data-bundle]:checked')).map(x=>x.value);a.scope=val('access_scope');db.staff.history.push({at:new Date().toISOString(),text:`${a.username} access updated: ${a.bundles.join(', ')}`});closeOverlay()}
function deactivateStaff(id){let a=db.staff.accounts[id];a.status='inactive';db.staff.history.push({at:new Date().toISOString(),text:`${a.username} deactivated; historical attribution retained`});closeOverlay()}

function modal(title,sub,body,foot=''){return `<div class="overlay"><div class="modal"><div class="modal-head"><div><h2>${title}</h2><p>${sub}</p></div><button class="x" onclick="closeOverlay()">×</button></div><div class="modal-body">${body}</div><div class="modal-foot">${foot}</div></div></div>`}
function drawer(title,sub,body,foot=''){return `<div class="overlay"><div class="drawer"><div class="modal-head"><div><h2>${title}</h2><p>${sub}</p></div><button class="x" onclick="closeOverlay()">×</button></div><div class="modal-body">${body}</div>${foot?`<div class="modal-foot">${foot}</div>`:''}</div></div>`}
function overlay(){if(ui().modal)return modalView(ui().modal);if(ui().drawer)return drawerView(ui().drawer);return ''}
function modalView(m){let n=m.name,d=m.data||{};
  if(n==='new-enquiry'){let p=ui().pendingEnquiry||{};return modal('New enquiry','Capture the minimum needed to start the family history.',`${selectField('How did you hear about us?',sources,p.source||'Facebook','ne_source')}<div class="form-grid">${field('Parent / contact name',p.guardian||'New Parent','text',false,'ne_guardian')}${field('Phone',p.phone||'070 000 0000','text',false,'ne_phone')}${field('Child name',p.childName||'New Child','text',false,'ne_child')}${field('Child DOB',p.dob||'2024-06-01','date',false,'ne_dob')}${field('Desired start',p.start||'2027-01-19','date',false,'ne_start')}${selectField('Interested service',['Baby Class','Upper Class','Baby Class + Standard Daycare','Baby Class + Extended Daycare'],p.service||'Baby Class','ne_service')}</div>${textArea('Message',p.message||'Interested in 2027 admissions.','ne_message')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save enquiry',"saveNewEnquiry()",'primary')}`)}
  if(n==='duplicate-candidate'){let p=ui().pendingEnquiry||{},c=duplicateCandidateRecord();let proceed=p.duplicateReviewed?btn('Proceed as new record',"commitNewEnquiry('separate')",'primary'):'';return modal('Possible family match','MPS has found a possible existing record. Staff must inspect and decide; MPS never silently merges.',`${kv('New enquiry',`${esc(p.childName||'')} · ${esc(p.phone||'')}`)}<div class="kv"><span class="k">Possible match</span><span><button class="text-link" onclick="openDuplicateRecord()">${esc(c.childName)} · ${esc(c.matchReason)} →</button></span></div>${notice('If the enquiry details are wrong, edit them. If they are correct, inspect the existing record before deciding whether this is truly a duplicate.','warn')}`,`${btn('Edit enquiry',"editPendingEnquiry()",'secondary')}${btn('Open existing record',"openDuplicateRecord()",'secondary')}${proceed}`)}
  if(n==='qualify-lead'){let c=db.admissions[d.caseId];return modal('Review qualification','Qualification is about genuine fit and intent — not ability to pay or tour availability.',`${kv('Family',`${c.guardian} / ${c.childName}`)}${kv('Age / desired start','Relevant')}${kv('Admission interest','Genuine')}${kv('Follow-up permission','Yes')}${notice('Tour completion is not required to become a Qualified Lead.','info')}`,`${btn('Keep as enquiry','closeOverlay()','secondary')}${btn('Mark Qualified',`qualifyCase('${c.id}')`,'primary')}`)}
  if(n==='schedule-tour'){let c=db.admissions[d.caseId];return modal('Schedule tour','Keep the tour on the same admissions history.',`${field('Date','2026-09-18','date',false,'tour_date')}${field('Time','10:30','time',false,'tour_time')}${field('Attending contact',c.guardian,'text',false,'tour_contact')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Schedule tour',`scheduleTour('${c.id}')`,'primary')}`)}
  if(n==='complete-tour'){let c=db.admissions[d.caseId];return modal('Complete tour','Record what actually happened.',`${selectField('Outcome',['Family wants to proceed','Follow-up needed','Family not proceeding'],'Family wants to proceed','tour_outcome')}${textArea('Factual note','Family liked the classroom and wants to continue.','tour_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`completeTour('${c.id}')`,'primary')}`)}
  if(n==='send-application'){let c=db.admissions[d.caseId];return modal('Send secure application','No parent account required.',`${kv('Recipient',`${c.guardian} · ${c.phone}`)}${kv('Expires','7 days from generation')}${kv('Prefill','Enquiry + Tour information')}${field('Secure link',`https://apply.mps.example/a/${c.id.toUpperCase()}-6V2K`,'text',true)}${textArea('Prepared WhatsApp message',`Hi ${c.guardian.split(' ')[0]}, thank you for visiting ${ORG}. Please use this secure link to review the details we already have and submit ${c.childName.split(' ')[0]}’s application.`,'app_message')}${notice('Manual WhatsApp records Sent only — not Delivered or Read.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Copy & mark Sent',`sendApplication('${c.id}')`,'primary')}`)}
  if(n==='accept-application'){let c=db.admissions[d.caseId];return modal('Accept application','Acceptance freezes the placement facts for conversion.',`${selectField('Programme / class',['Baby Class','Upper Class'],c.service.includes('Upper')?'Upper Class':'Baby Class','accept_class')}${field('Start date',c.start,'date',false,'accept_start')}${notice('Accepted is not Enrolled. The admission-fee gate must be satisfied or waived before conversion.','warn')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Accept',`acceptApplication('${c.id}')`,'primary')}`)}
  if(n==='waitlist-application'){return modal('Waitlist application','Keep the application active without pretending a place has been accepted.',`${field('Waitlist note','Awaiting class capacity confirmation.','text',false,'wait_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Waitlist',`waitlistApplication('${d.caseId}')`,'primary')}`)}
  if(n==='decline-application'){return modal('Decline application','Record the real non-conversion reason.',`${selectField('Reason',lostReasons,'No suitable place / start date','decline_reason')}${textArea('Optional factual note','','decline_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Decline',`declineApplication('${d.caseId}')`,'danger')}`)}
  if(n==='withdraw-application'){return modal('Record family withdrawal','The family chose to withdraw before enrolment.',`${selectField('Reason',['Family postponed preschool decision','No longer interested','Chose another preschool','Other'],'Family postponed preschool decision','withdraw_reason')}${textArea('Optional factual note','','withdraw_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record withdrawal',`withdrawApplication('${d.caseId}')`,'danger')}`);}
  if(n==='record-admission-payment'){let c=db.admissions[d.caseId],out=feeOutstanding(c.fee);return modal('Record admission-fee payment','Record what the family says was paid. It remains Pending Verification until an authorised real-source check.',`${kv('Family',c.childName)}${kv('Outstanding',money(out))}${selectField('Method',['Bank transfer','Cash'],'Bank transfer','adm_record_method')}${field('Amount',String(out),'number',false,'adm_record_amount')}${field('Reference','','text',false,'adm_record_reference')}${field('Optional evidence filename','','text',false,'adm_record_evidence')}${notice('A screenshot/file is optional. Verification against the real bank/cash source is still required.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record payment',`recordAdmissionPayment('${c.id}')`,'primary')}`)}
  if(n==='verify-admission-payment'){let c=db.admissions[d.caseId],p=c.fee.pending.find(x=>x.id===d.paymentId);return modal('Verify admission-fee payment','Check the real source before marking Verified.',`${kv('Family',c.childName)}${kv('Method',p.method)}${kv('Amount',money(p.amount))}${kv('Reference',p.reference)}${selectField('Verification method',['Bank app/account checked','Bank statement checked','Cash received','Payment-provider confirmation','Other authorised verification'],'Bank app/account checked','adm_verification')}${notice('The optional screenshot is not the control. The authorised real-source check is.','info')}`,`${btn('Reject','closeOverlay()','secondary')}${btn('Verify payment',`verifyAdmissionPayment('${c.id}','${p.id}')`,'primary')}`)}
  if(n==='overdue-fee'){let c=db.admissions[d.caseId];return modal('Admission fee overdue','The place is not released automatically.',`${kv('Application',`${c.childName} · Accepted`)}${kv('Fee',money(c.fee.amount))}${kv('Due date',fmtDate(c.fee.due))}${selectField('Authorised action',['Extend deadline','Waive fee with reason','Release / close place with reason'],'Extend deadline','overdue_action')}${field('New deadline','2026-09-20','date',false,'overdue_date')}${textArea('Reason','Family requested a short extension while bank transfer is arranged.','overdue_reason')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record decision',`recordOverdueDecision('${c.id}')`,'primary')}`)}
  if(n==='create-enrolment'){let c=db.admissions[d.caseId];return modal('Create enrolment','Accepted Application + satisfied fee gate → real child/enrolment record.',`${kv('Child',c.childName)}${kv('Class',c.service.includes('Upper')?'Upper Class':'Baby Class')}${kv('Service',c.service)}${kv('Start date',fmtDate(c.start))}${notice('MPS reuses the existing family/application information. Staff do not create the family again.','ok')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create enrolment',`createEnrolment('${c.id}')`,'primary')}`)}
  if(n==='review-health'){let c=db.admissions[d.caseId],o=ensureOnboarding(c.id);return modal('Review initial Health','Parent-submitted information becomes authoritative only after authorised review.',`${kv('Child',c.childName)}${kv('Parent declaration',o.draft.health.allergies==='Yes'?o.draft.health.allergyDetails:'No allergies declared')}${kv('Medical conditions',o.draft.health.conditions==='Yes'?`Yes · ${o.draft.health.conditionDetails}`:'No')}${kv('Regular medication',o.draft.health.medication==='Yes'?`Yes · ${o.draft.health.medicationDetails}`:'No')}${kv('Dietary restrictions',o.draft.health.dietary==='Yes'?`Yes · ${o.draft.health.dietaryDetails}`:'No')}${textArea('Authorised review note','Confirmed with guardian during onboarding review.','health_review_note')}`,`${btn('Keep pending','closeOverlay()','secondary')}${btn('Confirm Health',`confirmOnboardingHealth('${c.id}')`,'primary')}`)}
  if(n==='rapid-arrival')return modal('Rapid arrival','Fast convenience; each selected child still becomes physically present individually.',Object.values(db.attendance).filter(x=>x.status!=='present').map(r=>`<label class="check-row"><input data-arrival type="checkbox" value="${r.id}"> ${r.name}</label>`).join('')||notice('All sample children are already present or checked out.','info'),`${btn('Cancel','closeOverlay()','secondary')}${btn('Check in selected','rapidArrival()','primary')}`);
  if(n==='checkout'){let r=db.attendance[d.childId];return modal('Checkout child','Record only after safe handover.',`${kv('Child',r.name)}${selectField('Collector',['Kasun Perera · Father','Malini Perera · Grandmother','Other authorised collector'],'Kasun Perera · Father','collectorSelect')}${kv('Verification','Routine authorised collector · manual human check')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record checkout',`checkout('${r.id}')`,'primary')}`)}
  if(n==='temporary-pickup'){let r=db.attendance[d.childId];return modal(`Temporary pickup · ${r.name}`,'Human verification remains the safety decision.',`${kv('Instruction',`${r.temporaryPickup.name} · ${r.temporaryPickup.valid}`)}${kv('Requested by',r.temporaryPickup.source)}${kv('Reference',r.temporaryPickup.reference)}${selectField('Physical identity check',['Reference photo matched by staff','Government photo ID checked','Live visual guardian confirmation'],'Reference photo matched by staff','temp_verify')}${notice('If staff are not satisfied, do not release the child.','bad')}`,`${btn('Do not release','closeOverlay()','danger')}${btn('Escalate uncollected',`escalateUncollected('${r.id}')`,'secondary')}${btn('Safe handover & checkout',`checkout('${r.id}',true)`,'primary')}`)}
  if(n==='attendance-correction'){let r=db.attendance[d.childId],x=r.corrections[0];return modal('Attendance correction history','Authorised corrections preserve the original fact and amendment.',`${kv('Original',`${r.name} · arrived ${x.from}`)}${kv('Correction',x.to)}${kv('Reason',x.reason)}${kv('Changed by',`${x.by} · ${x.at}`)}`,btn('Close','closeOverlay()','secondary'))}
  if(n==='daycare-booking')return modal('Ad-hoc daycare booking','Only enrolled/eligible children; capacity must allow it.',`${selectField('Child',['amaya','ruvin','kavindu','imani'],'ruvin','db_child')}${selectField('Care',['Standard Daycare','Extended Daycare','One-day Late Care extension'],'Standard Daycare','db_care')}${field('Date',TODAY,'date',false,'db_date')}${kv('Capacity',`${db.daycare.capacity-daycareRoster().length} places available`)}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Authorise booking','authoriseDaycareBooking()','primary')}`);
  if(n==='care-entry')return modal('Record daycare care','Keep it factual and lightweight.',`${selectField('Meal outcome',['Offered','Refused','Ate some','Ate most','Ate all'],'Ate most','care_meal')}${selectField('Rest outcome',['Slept','Partially slept','Quiet rest','Did not settle'],'Quiet rest','care_rest')}${selectField('Activity',['Outdoor play','Colouring','Story time','Blocks','Music','Dancing','Puzzles','Free play','TV/movie time','Other'],'Outdoor play','care_activity')}${selectField('Participation',['Participated','Partially participated','Did not participate'],'Participated','care_participation')}${textArea('Meaningful care note','','care_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save care record',`saveCareRecord('${d.childId}')`,'primary')}`);
  if(n==='late-pickup'){let lp=db.daycare.latePickups[d.id];return modal('Late pickup review','The system detects; the authorised reviewer approves or waives with reason before Billing.',`${kv('Child',lp.childName)}${kv('Expected pickup',lp.expected)}${kv('Grace ends',lp.grace)}${kv('Actual checkout',lp.actual)}${kv('Late beyond grace',`${lp.minutesBeyond} minutes`)}${kv('Configured fee',money(lp.amount))}${textArea('Decision reason','Traffic delay discussed with guardian.','lp_reason')}`,`${btn('Waive',`decideLatePickup('${lp.id}','waived')`,'secondary')}${btn('Approve charge',`decideLatePickup('${lp.id}','approved')`,'primary')}`)}
  if(n==='observation'){let p=planActivityByUid(d.uid),lib=db.curriculum.library[p.a.libId];return modal('Add meaningful observation','Activity and learning-area context are inherited from Today.',`${kv('Activity',`${lib.title} ${prov('Prefilled','derived')}`)}${kv('Official learning area',`${lib.officialArea} ${prov('Prefilled','derived')}`)}${selectField('Child',['Amaya Perera','Imani de Alwis','Ruvin Bandara'],'Amaya Perera','obs_child')}${textArea('Factual observation','Amaya independently matched red objects to the red bowl and corrected one blue object after looking again.','obs_text')}${selectField('Visibility',['Internal','Parent-eligible candidate','Restricted'],'Parent-eligible candidate','obs_visibility')}${selectField('Photo',['No photo','Attach 1 photo'],'Attach 1 photo','obs_photo')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save observation',`saveObservation('${d.uid}')`,'primary')}`)}
  if(n==='assessment'){let p=planActivityByUid(d.uid),lib=db.curriculum.library[p.a.libId];return modal('Record selective assessment','Only where evidence genuinely exists.',`${kv('Activity',lib.title)}${kv('Official learning area',lib.officialArea)}${selectField('Amaya Perera',['1','2','3','4','5','Not observed','Absent','Not applicable'],'4','ass_amaya')}${selectField('Imani de Alwis',['1','2','3','4','5','Not observed','Absent','Not applicable'],'3','ass_imani')}${selectField('Ruvin Bandara',['1','2','3','4','5','Not observed','Absent','Not applicable'],'Not observed','ass_ruvin')}${selectField('Kavindu Silva',['1','2','3','4','5','Not observed','Absent','Not applicable'],'Absent','ass_kavindu')}${notice('The local 1–5 rubric is not presented as an official NIE scoring scale.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save evidence',`saveAssessment('${d.uid}')`,'primary')}`)}
  if(n==='published-info'){let w=currentWeek();return modal('Week is published','Teachers see this approved plan in Today.',`${kv('Published by',w.approvedBy)}${kv('Week',w.label)}${kv('Status','Published')}`,btn('Close','closeOverlay()','secondary'))}
  if(n==='health-update'){let u=db.health.updates[d.id];return modal('Review Health update','Do not overwrite authoritative Health until reviewed.',`${kv('Child',u.childName)}${kv('Parent submission',u.summary)}${textArea('Review note','Confirmed new instructions with guardian; update current Health plan.','hu_note')}`,`${btn('Keep pending','closeOverlay()','secondary')}${btn('Confirm into Health',`confirmHealthUpdate('${u.id}')`,'primary')}`)}
  if(n==='medication'){return modal('Medication administration','Current valid authorisation required.',`${kv('Child','Minoli Fernando')}${kv('Medication',db.health.medAuth.minoli.medication)}${kv('Authorisation',badge(db.health.medAuth.minoli.status,db.health.medAuth.minoli.status==='current'?'green':'red'))}${selectField('Outcome',['Administered','Refused','Child absent','Not administered — other'],'Administered','med_outcome')}${field('Actual time','14:03','time',false,'med_time')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record actual outcome','recordMedication()','primary')}`)}
  if(n==='med-authorisation')return modal('Replace medication authorisation','A new valid instruction replaces the old current version.',`${field('Medication','Prescribed inhaler','text',true)}${textArea('Current instruction',db.health.medAuth.minoli.instruction,'ma_instruction')}${notice('Casual verbal/WhatsApp messages alone are not routine medication authorisation.','warn')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save replacement','replaceMedicationAuth()','primary')}`);
  if(n==='incident')return modal('New incident','Care first; record objective facts as soon as safely practical.',`${selectField('Category',['Accident / Injury','Illness / Medical event','Behaviour / Safeguarding concern','Safety / Facility incident','Uncollected Child','Other'],'Accident / Injury','inc_cat')}${textArea('What happened','','inc_what')}${textArea('Immediate action','','inc_action')}${selectField('Guardian contact',['Not yet contacted','Called — spoke to guardian','Called — no answer','Informed in person'],'Not yet contacted','inc_contact')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save incident','saveIncident()','primary')}`);
  if(n==='incident-review'){let i=db.health.incidents.find(x=>x.id===d.id);return modal('Review incident','Head Teacher review, guardian contact and follow-up before closure.',`${kv('Category',i.category)}${kv('What happened',esc(i.what))}${kv('Immediate action',esc(i.action))}${kv('Guardian contact',i.contact)}${selectField('Follow-up',['No further follow-up required','Follow-up complete','Open follow-up'],'No further follow-up required','inc_followup')}`,`${btn('Keep open','closeOverlay()','secondary')}${btn('Close incident',`closeIncident('${i.id}')`,'primary')}`);}
  if(n==='invoice-detail'){let inv=db.billing.invoices[d.id],st=invoiceStatus(inv);let allocs=inv.allocations.map(a=>db.billing.payments[a.paymentId]).filter(Boolean);return modal(`Invoice ${inv.number}`,'Issued snapshot / draft lines, payments and audit history.',`${kv('Status',badge(st.text,st.tone))}${kv('Total',money(invoiceTotal(inv)))}${inv.status!=='draft'?kv('Verified paid',money(invoicePaid(inv))):''}${inv.status!=='draft'?kv('Outstanding',money(invoiceOutstanding(inv))):''}<div class="section-title">Lines</div>${inv.lines.map(l=>kv(l.description,money(l.amount))).join('')}${allocs.length?`<div class="section-title">Verified payments / receipts</div>${allocs.map(p=>kv(`${money(p.amount)} · ${p.reference}`,`${p.verification||'Verified'} · ${p.receipt||'Receipt history retained'}`)).join('')}`:''}<div class="section-title">Evidence & history</div>${inv.evidence.invoicePdf?kv('Issued PDF snapshot',inv.evidence.invoicePdf):kv('Issued PDF snapshot','Not yet issued')}${inv.history.map(h=>`<div class="notice info">${h.at} · ${esc(h.text)}</div>`).join('')}${inv.status==='issued'?notice('Issued lines are immutable. Correct with an auditable void/replacement path.','info'):notice('Draft remains editable until issue.','info')}`,`${btn('Close','closeOverlay()','secondary')}${inv.status==='draft'?`${btn('Edit draft',`openModal('edit-draft',{id:'${inv.id}'})`,'secondary')}${btn('Issue invoice',`issueInvoice('${inv.id}')`,'primary')}`:`${invoiceOutstanding(inv)>0&&Object.values(db.billing.payments).some(p=>p.childId===inv.childId&&p.status==='pending')?btn('Record / verify payment',`closeOverlay();openModal('verify-payment',{id:'${Object.values(db.billing.payments).find(p=>p.childId===inv.childId&&p.status==='pending')?.id}'})`,'primary'):''}${btn('Void & replace',`voidAndReplace('${inv.id}')`,'secondary')}`}`)}
  if(n==='draft-invoice'){return modal('Create draft invoice','Drafts can be edited before issue. Later charges never rewrite an issued invoice.',`${selectField('Child',['Amaya Perera','Senuri Peris','Nethmi Silva','Ruvin Bandara'],'Nethmi Silva','draft_child')}${field('Description','Ad-hoc daycare charge','text',false,'draft_desc')}${field('Amount','3000','number',false,'draft_amount')}${field('Due date','2026-09-25','date',false,'draft_due')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create draft',"createDraftInvoice()",'primary')}`)}
  if(n==='edit-draft'){let inv=db.billing.invoices[d.id],l=inv.lines[0];return modal('Edit draft invoice','Only DRAFT invoices can be changed freely.',`${field('Due date',inv.due,'date',false,'edit_due')}${field('Line description',l?.description||'','text',false,'edit_desc')}${field('Line amount',String(l?.amount||0),'number',false,'edit_amount')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save draft changes',`updateDraftInvoice('${inv.id}')`,'primary')}`)}
  if(n==='verify-payment'){let p=db.billing.payments[d.id||'p2'];return modal('Verify payment','Every payment is checked against the real source before allocation.',`${kv('Method',p.method)}${kv('Amount',money(p.amount))}${kv('Reference',p.reference)}${kv('Evidence',p.evidence||'No proof file stored')}${selectField('Verification method',['Bank app/account checked','Bank statement checked','Cash received','Payment-provider confirmation','Other authorised verification'],'Bank statement checked','pay_verification')}`,`${btn('Reject','closeOverlay()','secondary')}${btn('Verify & allocate',`verifyPayment('${p.id}')`,'primary')}`)}
  if(n==='marketing-review'){let p=db.media.photos[d.id];return modal('Review final intended Facebook asset','Approve the exact asset/context, not a generic permission.',`${kv('Photo',p.title)}${kv('Identifiable children',p.childIds.map(x=>({amaya:'Amaya Perera',thehan:'Thehan Wijesinghe',imani:'Imani de Alwis'}[x]||x)).join(', '))}${kv('Consent check',p.childIds.includes('thehan')?'Blocked — Thehan has Facebook No':'Eligible — current Facebook Yes')}${kv('Intended use',p.marketing.use)}${notice('Reject for marketing does not delete the legitimate private classroom photo.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Reject for marketing',`rejectMarketing('${p.id}')`,'danger')}${btn('Approve asset',`approveMarketing('${p.id}')`,'primary')}`)}
  if(n==='delete-photo'){let p=db.media.photos[d.id];return modal('Delete photo','Deletion is different from marketing rejection.',`${kv('Photo',p.title)}${selectField('Reason',['Blurry / unusable','Accidental upload','Duplicate','Inappropriate / privacy concern','No useful documentation value'],'Blurry / unusable','delete_reason')}${notice('The photo leaves normal use immediately and remains in a restricted recycle bin for 30 days unless a retention hold applies.','warn')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Move to recycle bin',`deletePhoto('${p.id}')`,'danger')}`)}
  if(n==='calendar-exception'){let x=d.id?db.calendar.exceptions[d.id]:null;return modal(x?'Amend operating-day exception':'Operating-day exception','This changes operating truth; it is separate from ordinary calendar events.',`${field('Date',x?.date||'2026-09-25','date',false,'cal_date')}${selectField('Day type',['Closed Day','Daycare-Only Day','Special Opening Day'],x?.type||'Closed Day','cal_type')}${textArea('Reason',x?.reason||'Approved preschool closure.','cal_reason')}${x?notice('Amendment history is retained.','info'):''}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save exception',`saveCalendarException(${x?`'${x.id}'`:'null'})`,'primary')}`)}
  if(n==='calendar-event')return modal('Add important-date event','Events provide context without changing operating-day truth.',`${field('Title','International Flags Day','text',false,'evt_title')}${field('Date','2026-09-28','date',false,'evt_date')}${selectField('Scope',['Whole preschool','Baby Class','Upper Class'],'Whole preschool','evt_scope')}${textArea('Optional note','Planning context only.','evt_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save event','saveCalendarEvent()','primary')}`);
  if(n==='staff-account')return modal('Create staff account','Preschool-controlled MPS identity; personal email is not required.',`${field('Full name','New Teacher','text',false,'staff_name')}${field('MPS username','new.teacher','text',false,'staff_username')}${selectField('Permission bundle',['Head Teacher','Class Teacher','Assistant Teacher','Daycare','Admissions','Accounts','Social Media','System Administration'],'Class Teacher','staff_bundle')}${field('Scope','Baby Class','text',false,'staff_scope')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create account','createStaff()','primary')}`);
  if(n==='manage-access'){let a=db.staff.accounts[d.id];let bundles=['Head Teacher','Class Teacher','Assistant Teacher','Daycare','Admissions','Accounts','Social Media','System Administration'];return modal('Manage access','One account can hold several bundles without role switching.',`${bundles.map(b=>`<label class="check-row"><input data-bundle type="checkbox" value="${b}" ${checked(a.bundles.includes(b))}> ${b}</label>`).join('')}${field('Scope',a.scope,'text',false,'access_scope')}${notice('Deactivation stops future access but preserves historical attribution.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Deactivate account',`deactivateStaff('${a.id}')`,'danger')}${btn('Save access',`saveAccess('${a.id}')`,'primary')}`)}
  if(n==='access-history'){let a=db.staff.accounts[d.id];return modal('Historical access','Disabling access never deletes attribution.',`${kv('Account',a.username)}${kv('Status',a.status)}${kv('Former bundle',a.bundles.join(' · '))}${kv('Historical actions','Retained / attributable')}`,btn('Close','closeOverlay()','secondary'))}
  if(n==='report-preview'){let r=db.reports.amaya_sep,obs=r.selectedEvidence.map(id=>db.observations[id]).filter(Boolean);return modal('Parent report preview','Parent-friendly evidence — not a technical scoring grid.',`<div class="card flat"><div class="eyebrow">${r.month}</div><h3>${r.childName}</h3><p><strong>What we noticed</strong><br>${obs.length?obs.map(o=>esc(o.text)).join('<br><br>'):'No observation selected yet.'}</p><p style="margin-top:10px"><strong>Teacher note</strong><br>${esc(r.teacherNote)}</p></div>`,btn('Close','closeOverlay()','secondary'))}
  return modal('Prototype action','This interaction has no specific view.',notice('No business rule is being invented here.','info'),btn('Close','closeOverlay()','secondary'));
}
function drawerView(d){
  if(d.name==='duplicate-existing-record'){let c=duplicateCandidateRecord(),p=ui().pendingEnquiry||{};return drawer('Compare possible match','Compare the new enquiry with the existing record before deciding.',`${notice(`MPS flagged this candidate because of ${esc(c.matchReason)}. A matching contact detail can also mean another child in the same family.`,'info')}<div class="grid" style="margin-top:14px"><div class="span-6 card flat"><div class="eyebrow">New enquiry</div><h3>${esc(p.childName||'New child')}</h3>${kv('Date of birth',fmtDate(p.dob))}${kv('Guardian',esc(p.guardian||'—'))}${kv('Phone',esc(p.phone||'—'))}${kv('Interested service',esc(p.service||'—'))}</div><div class="span-6 card flat"><div class="eyebrow">Existing record</div><h3>${esc(c.childName)}</h3>${kv('Date of birth',fmtDate(c.dob))}${kv('Guardian',esc(c.guardian))}${kv('Phone',`${esc(c.phone)} ${c.phone===p.phone?badge('Match','amber'):''}`)}${kv('Current status',c.status)}${kv('Programme / class',c.className)}</div></div>${notice(`If these represent the same child/person, close the new enquiry as a duplicate. If they are different children or different families, go back and choose Proceed as new record.`,'warn')}`,`${btn('Back to duplicate warning',"returnToDuplicateReview()",'secondary')}${btn('Close new enquiry as duplicate',"closePendingAsDuplicate()",'danger')}`)}
  if(d.name==='activity-library'){return drawer(`Activity library · ${d.data.day}`,'Choose a reusable activity; the selected activity will actually be added to this week.',Object.values(db.curriculum.library).map(lib=>`<div class="lesson-card"><div class="title">${lib.title}</div><div class="meta">${lib.sourceType} · mapped to ${lib.officialArea}</div><p>${esc(lib.summary)}</p><div class="materials"><span class="material">${esc(lib.materials)}</span></div><div style="margin-top:8px">${btn('Use this activity',`addActivity('${d.data.day}','${lib.id}')`,'primary','sm')}</div></div>`).join(''))}
  if(d.name==='activity-detail'){let p=planActivityByUid(d.data.uid),lib=db.curriculum.library[p.a.libId];return drawer(lib.title,'Official learning-area mapping, MPS summary and teacher adaptation remain distinct.',`${kv('Source type',lib.sourceType)}${kv('Official learning area',`${lib.officialArea} ${prov('Official structure','reused')}`)}${kv('MPS teacher-friendly summary',lib.summary)}${textArea('Teacher adaptation',p.a.adaptation||'','adaptationText')}${kv('Materials',lib.materials)}${notice('The adaptation is local teacher/preschool text; it is not represented as official source wording.','info')}`,`${btn('Close','closeOverlay()','secondary')}${btn('Save adaptation',`saveAdaptation('${p.a.uid}')`,'primary')}`)}
  if(d.name==='child-progress'){let cid=d.data.childId,obs=Object.values(db.observations).filter(o=>o.childId===cid),ass=Object.values(db.assessments).filter(a=>a.childId===cid);let name=obs[0]?.childName||ass[0]?.childName||cid;return drawer(`${name} · progress`,'Evidence is organised automatically from normal teaching records.',`${obs.map(o=>`<div class="card flat" style="margin-bottom:8px"><h3>${o.officialArea}</h3><p>${esc(o.text)}</p><small>${o.activityTitle} · ${o.date}</small></div>`).join('')}${ass.map(a=>`<div class="notice info">Assessment context · ${a.activityTitle} · ${a.result}</div>`).join('')}${!obs.length&&!ass.length?'<div class="empty">No evidence yet.</div>':''}`)}
  if(d.name==='recycle-bin'){let items=Object.values(db.media.recycle),priv=has('Head Teacher')||has('System Administration');return drawer('Recycle bin','Restricted deleted media · 30-day recovery window.',items.map(x=>{let p=db.media.photos[x.photoId];return p?`<div class="media-card"><div class="media-thumb">◩</div><div class="media-body"><strong>${p.title}</strong><span>Deleted · permanent deletion after 30 days unless held</span><div class="media-actions">${priv?`${btn('Restore',`restorePhoto('${p.id}')`,'secondary','sm')}${btn('Permanent delete',`permanentDeletePhoto('${p.id}')`,'danger','sm')}`:badge('Restricted','grey')}</div></div></div>`:''}).join('')||'<div class="empty">No deleted media.</div>')}
  return drawer('Details','',notice('No extra details.','info'));
}

function duplicateCandidateRecord(){let p=ui().pendingEnquiry||{};return {id:'existing_amara',childName:'Amara Perera',dob:'2023-10-18',guardian:'Sajana J.',phone:p.phone||'070 000 0000',status:'Enrolled · active family',className:'Upper Class',matchReason:'the same registered guardian phone'}}
function saveNewEnquiry(){ui().pendingEnquiry={guardian:val('ne_guardian'),phone:val('ne_phone'),childName:val('ne_child'),dob:val('ne_dob'),start:val('ne_start'),service:val('ne_service'),source:val('ne_source'),message:val('ne_message'),duplicateReviewed:false};ui().modal={name:'duplicate-candidate',data:null};save();render()}
function editPendingEnquiry(){ui().modal={name:'new-enquiry',data:{editing:true}};ui().drawer=null;save();render()}
function openDuplicateRecord(){if(!ui().pendingEnquiry)return;ui().pendingEnquiry.duplicateReviewed=true;ui().modal=null;ui().drawer={name:'duplicate-existing-record',data:{id:'existing_amara'}};save();render()}
function returnToDuplicateReview(){ui().drawer=null;ui().modal={name:'duplicate-candidate',data:null};save();render()}
function closePendingAsDuplicate(){let p=ui().pendingEnquiry;if(!p)return closeOverlay();if(!confirm(`Close the unsaved enquiry for ${p.childName} as a duplicate of the existing record?`))return;ui().pendingEnquiry=null;ui().modal=null;ui().drawer=null;save();render()}
function commitNewEnquiry(mode){let p=ui().pendingEnquiry;if(!p)return closeOverlay();if(!p.duplicateReviewed){alert('Inspect the possible existing record before proceeding as a new record.');return}let id='case_'+Date.now();db.admissions[id]={id,childName:p.childName,dob:p.dob,guardian:p.guardian,phone:p.phone,start:p.start,service:p.service,source:p.source,reason:'Other',events:[ev('enquiry','Enquiry created',`${p.source} · possible match reviewed; staff confirmed separate record`)],tour:null,application:{status:'not_sent',draft:null,snapshot:null},fee:null,enrolment:null,onboarding:null,closed:null};ui().admissionsCase=id;ui().admissionsTab='overview';ui().pendingEnquiry=null;ui().modal=null;ui().drawer=null;save();render()}
function qualifyCase(id){addEvent(id,'qualified','Marked Qualified Lead','Genuine family · relevant age/start · follow-up agreed');closeOverlay()}
function scheduleTour(id){let c=db.admissions[id];c.tour={status:'scheduled',date:val('tour_date'),time:val('tour_time'),outcome:null};addEvent(id,'tour_scheduled','Tour scheduled',`${fmtDate(c.tour.date)} · ${c.tour.time}`);closeOverlay()}
function completeTour(id){let c=db.admissions[id];c.tour.status='completed';c.tour.outcome=val('tour_outcome');addEvent(id,'tour','Tour completed',`${c.tour.outcome} · ${val('tour_note')}`);if(c.tour.outcome==='Family not proceeding')c.closed={type:'Withdrawn',reason:'Family not proceeding'};closeOverlay()}
function sendApplication(id){let c=db.admissions[id];if(!c.application.draft)c.application.draft={childName:c.childName,dob:c.dob,guardian:c.guardian,phone:c.phone,service:c.service,start:c.start,note:''};c.application.status='sent';addEvent(id,'application_sent','Application link sent','Secure WhatsApp link · expires in 7 days');closeOverlay()}
function acceptApplication(id){let c=db.admissions[id];c.application.status='accepted';c.start=val('accept_start')||c.start;c.fee={amount:15000,due:'2026-09-21',verified:0,pending:[],status:'pending'};addEvent(id,'accepted','Application accepted',`${val('accept_class')} · ${fmtDate(c.start)}`);addEvent(id,'fee_invoice','Admission-fee invoice issued','LKR 15,000');closeOverlay()}
function waitlistApplication(id){let c=db.admissions[id];c.application.status='waitlisted';addEvent(id,'waitlisted','Application waitlisted',val('wait_note'));closeOverlay()}
function declineApplication(id){let c=db.admissions[id];c.application.status='declined';c.closed={type:'Declined',reason:val('decline_reason')};addEvent(id,'declined','Application declined',`${val('decline_reason')} · ${val('decline_note')}`);closeOverlay()}
function withdrawApplication(id){let c=db.admissions[id];c.closed={type:'Withdrawn',reason:val('withdraw_reason')};addEvent(id,'withdrawn','Application withdrawn by family',`${val('withdraw_reason')} · ${val('withdraw_note')}`);closeOverlay()}
function recordAdmissionPayment(caseId){let c=db.admissions[caseId],amount=Math.max(0,Number(val('adm_record_amount')||0));if(!amount){alert('Enter the payment amount.');return}let max=feeOutstanding(c.fee);if(amount>max){alert('The recorded amount cannot exceed the current admission-fee outstanding balance in this prototype.');return}let p={id:'admp_'+Date.now(),amount,method:val('adm_record_method'),reference:val('adm_record_reference')||'No reference',evidence:val('adm_record_evidence')||null,status:'pending'};c.fee.pending.push(p);addEvent(caseId,'fee_payment_recorded','Admission-fee payment recorded',`${money(amount)} · Pending Verification`);closeOverlay()}
function verifyAdmissionPayment(caseId,paymentId){let c=db.admissions[caseId],p=c.fee.pending.find(x=>x.id===paymentId);p.status='verified';p.verification=val('adm_verification');c.fee.verified+=p.amount;c.fee.status=c.fee.verified>=c.fee.amount?'satisfied':'pending';addEvent(caseId,'fee_verified','Admission-fee payment verified',`${money(p.amount)} · ${p.verification}`);closeOverlay()}
function recordOverdueDecision(id){let c=db.admissions[id],a=val('overdue_action'),reason=val('overdue_reason');if(a==='Extend deadline'){c.fee.due=val('overdue_date');c.fee.status='pending';addEvent(id,'fee_extended','Admission-fee deadline extended',`${fmtDate(c.fee.due)} · ${reason}`)}else if(a==='Waive fee with reason'){c.fee.verified=c.fee.amount;c.fee.status='satisfied';c.fee.waived=true;addEvent(id,'fee_waived','Admission fee waived',reason)}else{c.closed={type:'Released',reason};addEvent(id,'released','Accepted place released',reason)}closeOverlay()}
function createEnrolment(id){let c=db.admissions[id];if(!c.fee||c.fee.verified<c.fee.amount){alert('Fee gate is not satisfied.');return}c.enrolment={status:'active',className:c.service.includes('Upper')?'Upper Class':'Baby Class',service:c.service,start:c.start};c.onboarding=seedOnboarding(c.childName,c.childName.split(' ')[0],c.dob,c.guardian,c.phone,{});addEvent(id,'enrolled','Enrolment created',`${c.enrolment.className} · ${fmtDate(c.start)}`);ui().admissionsTab='prestart';closeOverlay()}
function confirmOnboardingHealth(id){let c=db.admissions[id],o=ensureOnboarding(id);o.healthConfirmed=true;db.health.profiles[id]={allergies:o.draft.health.allergies==='Yes'?o.draft.health.allergyDetails:'None declared',instructions:'Confirmed from New Family Onboarding'};addEvent(id,'health_confirmed','Initial Health confirmed','Authorised staff review completed');closeOverlay()}

function render(){let r=ui().route;if(!allowed(r)&&!['parent-application','parent-onboarding','lesson-today'].includes(r))r='today';let html=r==='parent-application'?renderParentApplication():r==='parent-onboarding'?renderParentOnboarding():r==='admissions'?renderAdmissions():r==='attendance'?renderAttendance():r==='daycare'?renderDaycare():r==='lessons'?renderLessons():r==='lesson-today'?renderLessonToday():r==='reports'?renderReports():r==='health'?renderHealth():r==='billing'?renderBilling():r==='media'?renderMedia():r==='calendar'?renderCalendar():r==='staff'?renderStaff():renderToday();document.getElementById('root').innerHTML=html;document.getElementById('overlay').innerHTML=overlay()}
render();


// Owner Issue 003 — keep Admissions service choices symmetric across preschool classes.
function selectField(label,options,value='',id='',onchange=''){
  if(label==='Interested service'){
    options=[
      'Baby Class',
      'Upper Class',
      'Baby Class + Standard Daycare',
      'Baby Class + Extended Daycare',
      'Upper Class + Standard Daycare',
      'Upper Class + Extended Daycare'
    ];
  }
  return `<div class="field"><label>${label}</label><select ${id?`id="${id}"`:''} ${onchange?`onchange="${onchange}"`:''}>${options.map(o=>`<option ${o===value?'selected':''}>${esc(o)}</option>`).join('')}</select></div>`
}

// Owner Issue 004 — keep Admissions overview simple: one action, one concise details card.
function admissionOverview(c){
  let d=admissionDerived(c),action='';
  if(d.stage==='Enquiry')action=actionCard('Next action · Review qualification','Confirm genuine family, relevant age/start, real admission interest and permission to follow up.',btn('Review qualification',`openModal('qualify-lead',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Qualified')action=actionCard('Next action · Arrange a tour','Keep the appointment on the same family history.',btn('Schedule tour',`openModal('schedule-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour'&&c.tour?.status==='scheduled')action=actionCard('Next action · Complete tour',`${fmtDate(c.tour.date)} · ${c.tour.time}. Record the real outcome after the visit.`,btn('Complete tour',`openModal('complete-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour')action=actionCard('Next action · Send secure application','Tour is complete and the family wants to proceed.',btn('Send application',`openModal('send-application',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.status==='Waiting for parent')action=actionCard('Waiting for parent','The secure Application link is active. Staff can resend/copy it without leaving this record.',`${btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm')}${btn('Resend link',`openModal('send-application',{caseId:'${c.id}'})`,'secondary','sm')}`);
  else if(d.status==='Review required')action=actionCard('Next action · Review submitted application','The parent submission is now part of this same case.',btn('Review application',"setAdmissionTab('application')",'primary','sm'));
  else if(d.status==='Fee overdue')action=actionCard('Admission fee overdue','The place is not released automatically. An authorised decision is required.',btn('Review overdue',`openModal('overdue-fee',{caseId:'${c.id}'})`,'primary','sm'),'warning');
  else if(d.status==='Admission fee')action=actionCard('Admission fee in progress',`${money(c.fee.amount-c.fee.verified)} verified balance remaining.`,btn('Open payments',"setAdmissionTab('payments')",'primary','sm'));
  else if(d.status==='Fee satisfied')action=actionCard('Fee gate satisfied','Create the enrolment from the accepted Application; do not retype the family.',btn('Create enrolment',`openModal('create-enrolment',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Enrolled')action=actionCard(`Pre-start · ${d.status}`,'Parent onboarding and staff review live here; safety readiness is separate from non-critical checklist completion.',btn('Open pre-start',"setAdmissionTab('prestart')",'primary','sm'),d.status==='Pre-start review'?'warning':'');
  return `${action}<div class="card" style="margin-top:12px"><h3>Admission details</h3>${kv('Lead source',`${c.source} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',c.reason||'—')}${kv('Tour',c.tour?`${c.tour.status} · ${fmtDate(c.tour.date)} ${c.tour.time||''}`:'Not yet scheduled')}${kv('Application',applicationSummary(c))}${kv('Planned start',fmtDate(c.start))}</div>`
}

// Owner Issue 005 — one plain-language Admissions stage vocabulary across the staff UI.
const admissionStageLabels=['Enquiry','Confirmed Interest','Visit','Application','Accepted','Admission Fee','Enrolled','Ready to Start'];

function admissionDisplayStage(c){
  let d=admissionDerived(c);
  if(c.closed)return 'Closed';
  if(d.stage==='Enquiry')return 'Enquiry';
  if(d.stage==='Qualified')return 'Confirmed Interest';
  if(d.stage==='Tour')return 'Visit';
  if(d.stage==='Application')return 'Application';
  if(d.stage==='Accepted'&&c.fee)return 'Admission Fee';
  if(d.stage==='Accepted')return 'Accepted';
  if(d.stage==='Enrolled')return d.status==='Ready to start'?'Ready to Start':'Enrolled';
  return d.stage;
}
function admissionCondition(c){
  let d=admissionDerived(c),stage=admissionDisplayStage(c);
  if(c.closed)return 'Closed';
  if(stage==='Enquiry')return 'Confirm interest';
  if(stage==='Confirmed Interest')return 'Arrange visit';
  if(stage==='Visit')return c.tour?.status==='scheduled'?'Visit scheduled':'Visit completed · send application';
  if(stage==='Application'){
    if(d.status==='Waiting for parent')return 'Waiting for parent';
    if(d.status==='Review required')return 'Needs review';
    if(d.status==='Waitlisted')return 'Waitlisted';
    if(d.status==='Declined')return 'Declined';
    return 'Application in progress';
  }
  if(stage==='Accepted')return 'Create admission-fee invoice';
  if(stage==='Admission Fee'){
    if(d.status==='Fee overdue')return 'Payment overdue';
    if(d.status==='Fee satisfied')return 'Payment complete · enrol child';
    return 'Payment pending';
  }
  if(stage==='Enrolled')return d.status==='Pre-start review'?'Onboarding needs review':d.status==='Pre-start'?'Onboarding in progress':'Complete onboarding';
  if(stage==='Ready to Start')return 'Ready for first day';
  return d.next||'';
}
function admissionStageTone(c){
  let stage=admissionDisplayStage(c),d=admissionDerived(c);
  if(stage==='Closed')return 'grey';
  if(stage==='Admission Fee'&&d.status==='Fee overdue')return 'red';
  if(stage==='Admission Fee')return 'amber';
  if(stage==='Ready to Start'||stage==='Accepted'||stage==='Confirmed Interest')return 'green';
  if(stage==='Application')return d.status==='Review required'?'purple':'blue';
  return 'blue';
}
journey=function(c){let steps=['Enquiry','Confirmed Interest','Visit','Application','Accepted','Admission Fee','Enrolled','Ready to Start'];let current=admissionStageIndex(c);return `<div class="journey">${steps.map((s,i)=>`<div class="journey-step ${i<current?'done':i===current?'current':''}"><span class="dot">${i<current?'✓':i+1}</span>${s}</div>`).join('')}</div>`};
function admissionsFilteredCases(){let filter=ui().admissionsStageFilter||'All';return Object.values(db.admissions).filter(c=>filter==='All'||admissionDisplayStage(c)===filter)}
function setAdmissionsStageFilter(stage){ui().admissionsStageFilter=stage;let matches=admissionsFilteredCases();if(matches.length&&!matches.some(c=>c.id===ui().admissionsCase))ui().admissionsCase=matches[0].id;save();render()}
admissionsMetrics=function(){let all=Object.values(db.admissions),active=ui().admissionsStageFilter||'All';let stages=['All',...admissionStageLabels];return `<div class="tabs" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">${stages.map(stage=>{let count=stage==='All'?all.length:all.filter(c=>admissionDisplayStage(c)===stage).length;return `<button class="tab ${active===stage?'active':''}" data-stage-filter="${esc(stage)}" onclick='setAdmissionsStageFilter(${JSON.stringify(stage)})'>${stage} <strong>${count}</strong></button>`}).join('')}</div>`};
admissionsList=function(){let cases=admissionsFilteredCases();return `<div class="case-list"><div class="case-search"><input placeholder="Search admissions…" oninput="filterAdmissions(this.value)"></div><div id="admissionsCaseItems">${cases.length?cases.map(caseListItem).join(''):'<div class="empty" style="padding:16px">No families in this stage.</div>'}</div></div>`};
caseListItem=function(c){let stage=admissionDisplayStage(c),condition=admissionCondition(c);return `<div class="case-item ${ui().admissionsCase===c.id?'active':''}" data-stage="${esc(stage)}" data-search="${esc((c.childName+' '+c.guardian+' '+stage+' '+condition).toLowerCase())}" onclick="setAdmissionCase('${c.id}')"><div class="top"><strong>${c.childName}</strong><span style="margin-left:auto">${badge(stage,admissionStageTone(c))}</span></div><div class="meta">${c.guardian} · ${c.service}${condition?`<br>${esc(condition)}`:''}</div></div>`};
filterAdmissions=function(q){q=(q||'').toLowerCase();document.querySelectorAll('#admissionsCaseItems .case-item').forEach(el=>el.style.display=el.dataset.search.includes(q)?'block':'none')};
admissionHero=function(c){let stage=admissionDisplayStage(c);return `<div class="case-hero"><div class="case-hero-row"><div class="case-avatar">${c.childName.split(' ').map(x=>x[0]).slice(0,2).join('')}</div><div class="case-title"><h2>${c.childName}</h2><p>${c.guardian} · ${c.phone} · Start ${fmtDate(c.start)}<br>${c.service}</p></div><div class="case-status">${badge(stage,admissionStageTone(c))}</div></div>${journey(c)}</div>`};
renderAdmissions=function(){let matches=admissionsFilteredCases(),filter=ui().admissionsStageFilter||'All',c=db.admissions[ui().admissionsCase];if(!c||(filter!=='All'&&admissionDisplayStage(c)!==filter))c=matches[0]||null;if(c)ui().admissionsCase=c.id;let workspace=c?`${admissionHero(c)}${admissionTabs()}${renderAdmissionTab(c)}`:'<div class="card"><h3>No families in this stage</h3><p>Choose another admission stage to continue.</p></div>';return shell(`${pageHead('Admissions','Admissions','One clear admission journey. Choose a stage, open a family, and do the next real job.',btn('New enquiry',"openModal('new-enquiry')",'primary'))}${admissionsMetrics()}<div style="height:14px"></div><div class="case-layout">${admissionsList()}<div class="case-workspace">${workspace}</div></div>`)};
applicationSummary=function(c){let s=c.application.status;let labels={not_sent:'Not sent',sent:'Sent · waiting for parent',submitted:'Submitted · needs review',accepted:'Accepted',waitlisted:'Waitlisted',declined:'Declined'};return labels[s]||s};
admissionOverview=function(c){
  let d=admissionDerived(c),stage=admissionDisplayStage(c),action='';
  if(d.stage==='Enquiry')action=actionCard('Next action · Confirm interest','Confirm this is a genuine admission enquiry, the child fits the intake, and the family wants us to continue.',btn('Confirm interest',`openModal('qualify-lead',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Qualified')action=actionCard('Next action · Arrange visit','Keep the visit on the same family admission record.',btn('Schedule visit',`openModal('schedule-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour'&&c.tour?.status==='scheduled')action=actionCard('Next action · Complete visit',`${fmtDate(c.tour.date)} · ${c.tour.time}. Record what actually happened after the visit.`,btn('Complete visit',`openModal('complete-tour',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Tour')action=actionCard('Next action · Send application','The visit is complete and the family wants to proceed.',btn('Send application',`openModal('send-application',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.status==='Waiting for parent')action=actionCard('Waiting for parent','The secure application link is active. Staff can resend it without leaving this family record.',`${btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm')}${btn('Resend link',`openModal('send-application',{caseId:'${c.id}'})`,'secondary','sm')}`);
  else if(d.status==='Review required')action=actionCard('Next action · Review application','The parent submission is now part of this same admission record.',btn('Review application',"setAdmissionTab('application')",'primary','sm'));
  else if(d.status==='Fee overdue')action=actionCard('Admission Fee · Payment overdue','The place is not released automatically. An authorised decision is required.',btn('Review overdue',`openModal('overdue-fee',{caseId:'${c.id}'})`,'primary','sm'),'warning');
  else if(d.status==='Admission fee')action=actionCard('Admission Fee · Payment pending',`${money(c.fee.amount-c.fee.verified)} verified balance remaining.`,btn('Open payments',"setAdmissionTab('payments')",'primary','sm'));
  else if(d.status==='Fee satisfied')action=actionCard('Admission Fee · Payment complete','Create the enrolment from the accepted application; do not retype the family.',btn('Create enrolment',`openModal('create-enrolment',{caseId:'${c.id}'})`,'primary','sm'));
  else if(d.stage==='Enrolled'&&stage==='Ready to Start')action=actionCard('Ready to Start','Safety and operational onboarding is complete.',btn('Open pre-start',"setAdmissionTab('prestart')",'secondary','sm'));
  else if(d.stage==='Enrolled')action=actionCard(`Pre-start · ${admissionCondition(c)}`,'Parent onboarding and staff review live here; safety readiness is separate from non-critical checklist completion.',btn('Open pre-start',"setAdmissionTab('prestart')",'primary','sm'),d.status==='Pre-start review'?'warning':'');
  return `${action}<div class="card" style="margin-top:12px"><h3>Admission details</h3>${kv('Lead source',`${c.source} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',c.reason||'—')}${kv('Visit',c.tour?`${c.tour.status} · ${fmtDate(c.tour.date)} ${c.tour.time||''}`:'Not yet scheduled')}${kv('Application',applicationSummary(c))}${kv('Planned start',fmtDate(c.start))}</div>`
};

const _mpsAdmissionPlainModalView=modalView;
modalView=function(m){let n=m.name,d=m.data||{};
  if(n==='qualify-lead'){let c=db.admissions[d.caseId];return modal('Confirm interest','Confirm this is a genuine admission enquiry and the family wants us to continue.',`${kv('Family',`${c.guardian} / ${c.childName}`)}${kv('Age / desired start','Relevant for intake')}${kv('Admission interest','Confirmed')}${kv('Follow-up permission','Yes')}${notice('A visit is not required to confirm interest. Ability to pay is not part of this decision.','info')}`,`${btn('Keep as enquiry','closeOverlay()','secondary')}${btn('Confirm interest',`qualifyCase('${c.id}')`,'primary')}`)}
  if(n==='schedule-tour'){let c=db.admissions[d.caseId];return modal('Schedule visit','Keep the visit on the same admission record.',`${field('Date','2026-09-18','date',false,'tour_date')}${field('Time','10:30','time',false,'tour_time')}${field('Attending contact',c.guardian,'text',false,'tour_contact')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Schedule visit',`scheduleTour('${c.id}')`,'primary')}`)}
  if(n==='complete-tour'){let c=db.admissions[d.caseId];return modal('Complete visit','Record what actually happened.',`${selectField('Outcome',['Family wants to proceed','Follow-up needed','Family not proceeding'],'Family wants to proceed','tour_outcome')}${textArea('Factual note','Family liked the classroom and wants to continue.','tour_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`completeTour('${c.id}')`,'primary')}`)}
  if(n==='send-application'){let c=db.admissions[d.caseId];return modal('Send secure application','No parent account required.',`${kv('Recipient',`${c.guardian} · ${c.phone}`)}${kv('Expires','7 days from generation')}${kv('Prefill','Enquiry + Visit information')}${field('Secure link',`https://apply.mps.example/a/${c.id.toUpperCase()}-6V2K`,'text',true)}${textArea('Prepared WhatsApp message',`Hi ${c.guardian.split(' ')[0]}, thank you for visiting ${ORG}. Please use this secure link to review the details we already have and submit ${c.childName.split(' ')[0]}’s application.`,'app_message')}${notice('Manual WhatsApp records Sent only — not Delivered or Read.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Copy & mark Sent',`sendApplication('${c.id}')`,'primary')}`)}
  return _mpsAdmissionPlainModalView(m)
};
// Owner Issue 006 — clarify lean Application vs full New Family Onboarding and keep internal navigation out of parent UI.
function exitParentPreview(){ui().route='admissions';ui().parentApplicationStep=1;save();render()}

renderParentApplication=function(){
  let id=ui().parentApplicationCase,c=db.admissions[id];
  if(!c){ui().route='admissions';save();return renderAdmissions()}
  let d=c.application.draft||(c.application.draft={childName:c.childName,dob:c.dob,guardian:c.guardian,phone:c.phone,service:c.service,start:c.start,note:''});
  let s=ui().parentApplicationStep;
  let explainer=notice("This application only confirms the basic details needed to review your child's application. If your child is enrolled, we'll send a separate secure New Family Onboarding form before their first day for family, emergency, pickup and Health information.",'info');
  let body=s===1?`${explainer}<div class="form-grid">${field('Child full name',d.childName,'text',false,'pa_childName')}${field('Date of birth',d.dob,'date',false,'pa_dob')}${field('Parent / guardian',d.guardian,'text',false,'pa_guardian')}${field('Registered phone',d.phone,'text',false,'pa_phone')}</div>${selectField('Interested service',['Baby Class','Upper Class','Baby Class + Standard Daycare','Baby Class + Extended Daycare','Upper Class + Standard Daycare','Upper Class + Extended Daycare'],d.service,'pa_service')}${field('Desired start',d.start,'date',false,'pa_start')}`:`${notice("If your child is enrolled, the separate New Family Onboarding form will collect the remaining family, emergency, authorised pickup, Health, communication and consent information.",'ok')}${textArea('Anything the preschool should know for this application?',d.note||'','pa_note')}${selectField('Please confirm the information above is accurate',['Yes — submit','No — I need to correct something'],'Yes — submit','pa_confirm')}`;
  let footer=s===1?`<span></span>${btn('Continue',`appContinue('${id}')`,'primary')}`:`${btn('Back',`syncApplicationDraft('${id}');ui().parentApplicationStep=1;save();render()`,'secondary')}${btn('Submit application',`submitApplication('${id}')`,'primary')}`;
  return `<div class="parent-view"><div style="max-width:680px;margin:0 auto 8px;display:flex;justify-content:flex-end;align-items:center;gap:8px"><span style="font-size:11px;color:#60758a">Prototype review only</span>${btn('Exit parent preview','exitParentPreview()','secondary','sm')}</div><div class="parent-card"><div class="parent-brand"><strong>${ORG}</strong><p>Secure Application · no MPS account required</p></div><div class="parent-content"><div class="stepper"><span class="active"></span><span class="${s===2?'active':''}"></span></div><div class="eyebrow">Application for ${esc(c.childName)}</div><h2 style="color:var(--navy);font-size:20px;margin:5px 0 12px">${s===1?'Review your details':'Confirm & submit'}</h2>${body}<div class="parent-foot">${footer}</div></div></div></div>`
};
// Owner Calendar review — operational workspace, BQ-069/BQ-082 regression repair, and holiday-reference workflow.
const SL_HOLIDAYS_2026 = [
  ['2026-01-03','Duruthu Full Moon Poya Day'],
  ['2026-01-15','Tamil Thai Pongal Day'],
  ['2026-02-01','Nawam Full Moon Poya Day'],
  ['2026-02-04','Independence Day'],
  ['2026-02-15','Maha Sivarathri Day'],
  ['2026-03-02','Medin Full Moon Poya Day'],
  ['2026-03-21','Id-Ul-Fitr (Ramazan Festival Day)'],
  ['2026-04-01','Bak Full Moon Poya Day'],
  ['2026-04-03','Good Friday'],
  ['2026-04-13','Day Prior to Sinhala and Tamil New Year Day'],
  ['2026-04-14','Sinhala and Tamil New Year Day'],
  ['2026-05-01','Vesak Full Moon Poya Day'],
  ['2026-05-01','May Day (International Workers’ Day)'],
  ['2026-05-02','Day Following Vesak Full Moon Poya Day'],
  ['2026-05-28','Id-Ul-Alha (Hadji Festival Day)'],
  ['2026-05-30','Adhi Poson Full Moon Poya Day'],
  ['2026-06-29','Poson Full Moon Poya Day'],
  ['2026-07-29','Esala Full Moon Poya Day'],
  ['2026-08-26','Milad-Un-Nabi (Holy Prophet’s Birthday)'],
  ['2026-08-27','Nikini Full Moon Poya Day'],
  ['2026-09-26','Binara Full Moon Poya Day'],
  ['2026-10-25','Vap Full Moon Poya Day'],
  ['2026-11-08','Deepavali Festival Day'],
  ['2026-11-24','Il Full Moon Poya Day'],
  ['2026-12-23','Unduvap Full Moon Poya Day'],
  ['2026-12-25','Christmas Day']
].map((x,i)=>({id:`sl2026_${i+1}`,date:x[0],name:x[1],category:x[1].includes('Full Moon Poya')?'Poya':'Public holiday'}));

function upgradeCalendarWorkspace(){
  if(!db.calendar)db.calendar={exceptions:{},events:{}};
  if(!db.calendar.exceptions)db.calendar.exceptions={};
  if(!db.calendar.events)db.calendar.events={};
  if(!db.calendar.holidays)db.calendar.holidays={};
  if(!db.calendar.holidayImports)db.calendar.holidayImports={};
  save();
}
function isoAddDays(iso,n){let d=new Date(`${iso}T00:00:00Z`);d.setUTCDate(d.getUTCDate()+n);return d.toISOString().slice(0,10)}
function operatingStatusForDate(date){
  let ex=Object.values(db.calendar.exceptions||{}).find(x=>x.date===date);
  if(ex)return {text:ex.type,source:'Operating exception',tone:ex.type==='Closed Day'?'red':ex.type==='Daycare-Only Day'?'amber':'green'};
  let d=new Date(`${date}T00:00:00`),weekend=d.getDay()===0||d.getDay()===6;
  return {text:weekend?'Closed':'Normal Preschool Day',source:'Automatic weekly baseline',tone:weekend?'grey':'green'};
}
function calendarEventsOn(date){return Object.values(db.calendar.events||{}).filter(x=>x.date===date)}
function holidayReferencesOn(date){return Object.values(db.calendar.holidays||{}).filter(x=>x.date===date)}
function calendarChildren(){
  return Object.values(db.admissions||{}).filter(c=>c.dob&&(db.attendance?.[c.id]||c.enrolment?.status==='active')).map(c=>({id:c.id,name:c.childName,dob:c.dob,className:db.attendance?.[c.id]?.className||c.enrolment?.className||''}));
}
function birthdaysOn(date){let md=date.slice(5);return calendarChildren().filter(c=>c.dob.slice(5)===md)}
function nextBirthday(child,from=TODAY){let y=Number(from.slice(0,4)),candidate=`${y}-${child.dob.slice(5)}`;if(candidate<from)candidate=`${y+1}-${child.dob.slice(5)}`;return candidate}
function calendarContextForDate(date){
  let bits=[];
  holidayReferencesOn(date).forEach(h=>bits.push(`<div><strong>${esc(h.name)}</strong> ${badge('Holiday reference','purple')}</div>`));
  calendarEventsOn(date).forEach(e=>bits.push(`<div><strong>${esc(e.title)}</strong> ${badge('Staff event','blue')}<div class="sub">${esc(e.scope)}${e.note?` · ${esc(e.note)}`:''}</div></div>`));
  birthdaysOn(date).forEach(c=>bits.push(`<div><strong>🎂 ${esc(c.name)}</strong> ${badge('DOB-derived','green')}<div class="sub">Birthday context only</div></div>`));
  return bits.length?bits.join('<div style="height:6px"></div>'):'<span style="color:var(--muted)">No extra context</span>';
}
function calendarTodaySection(){
  let op=operatingStatusForDate(TODAY),events=calendarEventsOn(TODAY),holidays=holidayReferencesOn(TODAY),birthdays=birthdaysOn(TODAY);
  let contextCards=[];
  events.forEach(e=>contextCards.push(`<div class="span-4 card soft-blue"><div class="card-header"><div class="grow"><h3>🚩 ${esc(e.title)}</h3><p>${esc(e.scope)} · staff-created event</p></div>${badge('Context','blue')}</div><p>${esc(e.note||'Important-date context only.')} It does not change operating-day truth or invent a lesson.</p></div>`));
  holidays.forEach(h=>contextCards.push(`<div class="span-4 card soft-purple"><div class="card-header"><div class="grow"><h3>${esc(h.name)}</h3><p>${esc(h.category)} · Sri Lankan holiday reference</p></div>${badge('Reference','purple')}</div><p>The holiday label does not decide whether the preschool is open.</p></div>`));
  birthdays.forEach(c=>contextCards.push(`<div class="span-4 card"><h3>🎂 Birthday</h3><p>${esc(c.name)} · derived from DOB already held in MPS. Calm context, not an alert.</p></div>`));
  return `<div class="section-title">Today at ${ORG}</div><div class="grid"><div class="span-4 card"><h3>Operating today</h3><div style="margin:8px 0">${badge(op.text,op.tone)}</div><p>${op.source}. Events, birthdays and holiday references cannot silently change this status.</p></div>${contextCards.join('')||'<div class="span-8 card"><h3>No important-date context today</h3><p>The operating-day status above remains the operational truth.</p></div>'}</div>`;
}
function calendarPlanningContext(){
  let start=ui().lessonWeek,end=isoAddDays(start,4),scope=className();
  let items=[];
  Object.values(db.calendar.events||{}).filter(e=>e.date>=start&&e.date<=end&&(e.scope==='Whole preschool'||e.scope===scope)).forEach(e=>items.push({date:e.date,title:e.title,detail:`${e.scope}${e.note?` · ${e.note}`:''}`,kind:'Event'}));
  calendarChildren().filter(c=>!c.className||c.className===scope).forEach(c=>{let d=`${start.slice(0,4)}-${c.dob.slice(5)}`;if(d>=start&&d<=end)items.push({date:d,title:`${c.name} birthday`,detail:'Derived from DOB already held in MPS',kind:'Birthday'})});
  holidayReferencesOnRange(start,end).forEach(h=>items.push({date:h.date,title:h.name,detail:'Sri Lankan holiday reference · does not change operating status',kind:'Holiday reference'}));
  return items.sort((a,b)=>a.date.localeCompare(b.date));
}
function holidayReferencesOnRange(start,end){return Object.values(db.calendar.holidays||{}).filter(h=>h.date>=start&&h.date<=end)}
function planningContextBlock(){let items=calendarPlanningContext();if(!items.length)return '';return `<div class="card soft-blue" style="margin-bottom:14px"><div class="card-header"><div class="grow"><h3>Calendar context for this week</h3><p>Useful context only. Nothing here automatically creates a curriculum activity or compulsory lesson.</p></div>${badge('Context','blue')}</div>${items.map(x=>`<div class="child-row"><strong>${fmtDate(x.date)}</strong><span>${badge(x.kind,x.kind==='Birthday'?'green':x.kind==='Holiday reference'?'purple':'blue')}</span><span>${esc(x.title)}</span><span class="hide-mobile">${esc(x.detail)}</span></div>`).join('')}</div>`}

const calendarBaseRenderToday=renderToday;
renderToday=function(){
  let html=calendarBaseRenderToday();
  let start=`<div class="section-title">Today at ${ORG}</div>`,end='<div class="section-title">Needs your attention</div>',i=html.indexOf(start),j=html.indexOf(end,i);
  if(i<0||j<0)return html;
  return html.slice(0,i)+calendarTodaySection()+html.slice(j);
};
const calendarBaseRenderLessons=renderLessons;
renderLessons=function(){let html=calendarBaseRenderLessons(),block=planningContextBlock();return block?html.replace('<div class="lesson-layout">',`${block}<div class="lesson-layout">`):html};

renderCalendar=function(){
  upgradeCalendarWorkspace();
  let ex=Object.values(db.calendar.exceptions).sort((a,b)=>a.date.localeCompare(b.date));
  let events=Object.values(db.calendar.events).sort((a,b)=>a.date.localeCompare(b.date));
  let birthdays=calendarChildren().map(c=>({...c,next:nextBirthday(c)})).sort((a,b)=>a.next.localeCompare(b.next));
  let imported=Object.values(db.calendar.holidays).filter(h=>h.datasetYear===2026),days=Array.from({length:14},(_,i)=>isoAddDays(TODAY,i));
  let actions=`${btn('Add operating exception',"openModal('calendar-exception')",'primary')}${btn('Add event',"openModal('calendar-event')",'secondary')}${btn(imported.length?'Review Sri Lankan holidays':'Load Sri Lankan holidays',"openModal('holiday-import')",'secondary')}`;
  return shell(`${pageHead('Organisation calendar','Calendar','Staff manage exceptions, not calendars. Operating-day truth stays separate from birthdays, events and holiday references.',actions)}
    <div class="grid">
      <div class="span-4 card soft-lime"><h3>Automatic operating baseline</h3><p><strong>Monday–Friday:</strong> Normal Preschool Day<br><strong>Saturday–Sunday:</strong> Closed</p><div class="notice ok">Only dates that differ from this pattern need an operating exception.</div></div>
      <div class="span-4 card soft-purple"><h3>Sri Lankan holiday references</h3><p>${imported.length?`${imported.length} reference records loaded for 2026.`:'No 2026 holiday references loaded yet.'}</p><div class="notice info">A Poya/public-holiday label is reference context only. It never silently changes open/closed/daycare-only status.</div></div>
      <div class="span-4 card"><h3>Birthdays</h3><p>${birthdays.length?`${birthdays.length} upcoming birthday${birthdays.length===1?'':'s'} are derived from DOB already held in MPS.`:'No DOB-derived birthdays are available in this prototype state.'}</p><div class="notice info">Staff do not create a second birthday record in Calendar.</div></div>
    </div>
    <div class="section-title">Next 14 days <span class="section-sub">operating truth + context in one view</span></div>
    <div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Operating status</th><th>Important context / reference</th><th>Source</th></tr></thead><tbody>${days.map(date=>{let op=operatingStatusForDate(date);return `<tr><td><div class="name">${fmtDate(date)}</div><div class="sub">${new Date(`${date}T00:00:00`).toLocaleDateString('en-GB',{weekday:'long'})}</div></td><td>${badge(op.text,op.tone)}</td><td>${calendarContextForDate(date)}</td><td>${esc(op.source)}</td></tr>`}).join('')}</tbody></table></div>
    <div class="grid" style="margin-top:14px">
      <div class="span-7 card"><div class="card-header"><div class="grow"><h3>Operating-day exceptions</h3><p>Only dates that differ from the automatic baseline.</p></div></div>${ex.map(x=>`<div class="child-row"><strong>${fmtDate(x.date)}</strong><span>${badge(x.type,x.type==='Closed Day'?'red':x.type==='Daycare-Only Day'?'amber':'green')}</span><span class="hide-mobile">${esc(x.reason)} · ${x.history?.length||0} recorded version${(x.history?.length||0)===1?'':'s'}</span><span>${btn('Amend',`openModal('calendar-exception',{id:'${x.id}'})`,'secondary','sm')}</span></div>`).join('')||'<div class="empty">No operating exceptions yet. That is valid — the automatic baseline remains in force.</div>'}</div>
      <div class="span-5 card"><h3>Staff-created events</h3><p style="margin-bottom:10px">Events provide planning context without changing operations.</p>${events.map(e=>`<div class="child-row"><strong>${esc(e.title)}</strong><span>${fmtDate(e.date)}</span><span class="hide-mobile">${esc(e.scope)}</span><span>${badge('Context','blue')}</span></div>`).join('')||'<div class="empty">No staff-created events.</div>'}</div>
      <div class="span-12 card"><h3>DOB-derived birthdays</h3><p style="margin-bottom:10px">Read-only calendar context derived from the existing DOB source.</p>${birthdays.map(c=>`<div class="child-row"><strong>${esc(c.name)}</strong><span>${fmtDate(c.next)}</span><span class="hide-mobile">${esc(c.className||'Current child')}</span><span>${badge('MPS derived','green')}</span></div>`).join('')||'<div class="empty">No birthdays available.</div>'}</div>
    </div>`)};

saveCalendarException=function(id=null){
  let date=val('cal_date'),existing=!id?Object.values(db.calendar.exceptions||{}).find(x=>x.date===date):null,eid=id||existing?.id||`ex_${Date.now()}`,old=db.calendar.exceptions[eid];
  db.calendar.exceptions[eid]={id:eid,date,type:val('cal_type'),reason:val('cal_reason'),history:[...(old?.history||[]),{at:new Date().toISOString(),by:currentPersona().name,type:val('cal_type'),reason:val('cal_reason')}]};
  closeOverlay();
};
function holidayImportModal(){
  let year='2026',rows=SL_HOLIDAYS_2026,existing=Object.values(db.calendar.holidays||{}).filter(h=>h.datasetYear===2026).length;
  return modal(existing?'Review Sri Lankan holiday references':'Load Sri Lankan holiday references','Preview first; the import adds reference context only and never overwrites operating-day decisions.',`${selectField('Year',['2026'],year,'holiday_year')}${kv('Prototype dataset','Sri Lanka government 2026 public/Poya holiday calendar · sample integration data')}${kv('Dataset records',String(rows.length))}${notice('Production source/provider selection remains a later technical decision. This prototype proves the review-and-confirm workflow only.','info')}<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Holiday</th><th>Category</th><th>Operating decision</th></tr></thead><tbody>${rows.map(h=>{let op=Object.values(db.calendar.exceptions||{}).find(x=>x.date===h.date);return `<tr><td>${fmtDate(h.date)}</td><td>${esc(h.name)}</td><td>${badge(h.category,h.category==='Poya'?'purple':'blue')}</td><td>${op?`${badge(op.type,op.type==='Closed Day'?'red':op.type==='Daycare-Only Day'?'amber':'green')}<div class="sub">Existing decision kept</div>`:'Not changed by import'}</td></tr>`}).join('')}</tbody></table></div>`,`${btn('Cancel','closeOverlay()','secondary')}${btn(existing?'Refresh references':`Load ${rows.length} references`,"importSriLankaHolidayReferences()",'primary')}`)}
function importSriLankaHolidayReferences(){
  SL_HOLIDAYS_2026.forEach(h=>{db.calendar.holidays[h.id]={...h,datasetYear:2026,datasetVersion:'Sri Lanka government holiday calendar 2026 · prototype sample',importedAt:new Date().toISOString(),importedBy:currentPersona().name}});
  db.calendar.holidayImports['2026']={year:2026,count:SL_HOLIDAYS_2026.length,version:'Sri Lanka government holiday calendar 2026 · prototype sample',importedAt:new Date().toISOString(),importedBy:currentPersona().name};
  closeOverlay();
}
const calendarBaseModalView=modalView;
modalView=function(m){if(m?.name==='holiday-import')return holidayImportModal();return calendarBaseModalView(m)};

upgradeCalendarWorkspace();
render();
// Calendar reference-data accuracy patch: keep the prototype workflow separate from the later production provider decision.
const CALENDAR_REFERENCE_VERSION = 'Gazette Extraordinary 2438/22 · 27 May 2025';
const calendarHolidayNameCorrections = {
  '2026-02-01':'Navam Full Moon Poya Day',
  '2026-03-21':'Id-Ul-Fitre (Ramazan Festival Day)',
  '2026-05-28':'Id-Ul-Allah (Hadji Festival Day)',
  '2026-11-08':'Deepawali Festival Day'
};
SL_HOLIDAYS_2026.forEach(h=>{
  if(calendarHolidayNameCorrections[h.date])h.name=calendarHolidayNameCorrections[h.date];
  h.category=h.name.includes('Full Moon Poya')?'Full Moon Poya':'Other public holiday';
});
importSriLankaHolidayReferences=function(){
  SL_HOLIDAYS_2026.forEach(h=>{db.calendar.holidays[h.id]={...h,datasetYear:2026,datasetVersion:CALENDAR_REFERENCE_VERSION,importedAt:new Date().toISOString(),importedBy:currentPersona().name}});
  db.calendar.holidayImports['2026']={year:2026,count:SL_HOLIDAYS_2026.length,version:CALENDAR_REFERENCE_VERSION,importedAt:new Date().toISOString(),importedBy:currentPersona().name};
  closeOverlay();
};
// Mobile navigation completeness: keep the most relevant authorised routes visible and put overflow routes under More.
function mobileRouteOrder(){
  return ['today','attendance','lessons','daycare','admissions','billing','media','staff','calendar','reports','health'].filter(r=>allowed(r));
}
function mobileSecondaryRoutes(){
  const all=mobileRouteOrder();
  return all.length<=5?[]:all.slice(4);
}
mobileNav=function(){
  const all=mobileRouteOrder();
  const secondary=mobileSecondaryRoutes();
  const primary=secondary.length?all.slice(0,4):all;
  const currentIsMore=secondary.includes(ui().route);
  const items=primary.map(r=>`<button class="${ui().route===r||r==='lessons'&&ui().route==='lesson-today'?'active':''}" onclick="setRoute('${r}')"><span class="mi">${routes[r].icon}</span>${routes[r].label.split(' ')[0]}</button>`).join('');
  const more=secondary.length?`<button class="${currentIsMore?'active':''}" onclick="openModal('mobile-more')"><span class="mi">•••</span>More</button>`:'';
  return `<div class="mobile-nav" style="grid-template-columns:repeat(${Math.max(1,primary.length+(secondary.length?1:0))},1fr)">${items}${more}</div>`;
};
function mobileMoreModal(){
  const xs=mobileSecondaryRoutes();
  return modal('More','Open any other area available to this staff member.',`<div style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:8px">${xs.map(r=>`<button class="btn secondary" style="width:100%" onclick="setRoute('${r}')"><span>${routes[r].icon}</span>${esc(routes[r].label)}</button>`).join('')}</div>`,btn('Close','closeOverlay()','secondary'));
}
const mobileNavigationBaseModalView=modalView;
modalView=function(m){if(m?.name==='mobile-more')return mobileMoreModal();return mobileNavigationBaseModalView(m)};
render();
// Owner-approved Calendar refinement — visual month calendar, corrected operating states, and view-for-all access.
routes.calendar.bundles = null;

function calendarCanManage(){
  return has('Head Teacher') || has('System Administration');
}
function calendarNormaliseType(type){
  const map = {
    'Closed Day':'Closed',
    'Daycare-Only Day':'Daycare Only',
    'Special Opening Day':'Preschool + Daycare',
    'Normal Preschool Day':'Preschool + Daycare'
  };
  return map[type] || type;
}
function calendarBaselineForDate(date){
  const d = new Date(`${date}T00:00:00Z`);
  const weekend = d.getUTCDay() === 0 || d.getUTCDay() === 6;
  return weekend ? 'Closed' : 'Preschool + Daycare';
}
function calendarStatusTone(type){
  type = calendarNormaliseType(type);
  return type === 'Closed' ? 'red' : type === 'Daycare Only' ? 'amber' : 'green';
}
function calendarNormaliseStoredState(){
  upgradeCalendarWorkspace();
  let changed = false;
  Object.values(db.calendar.exceptions || {}).forEach(x=>{
    const nextType = calendarNormaliseType(x.type);
    if(nextType !== x.type){
      x.legacyType = x.legacyType || x.type;
      x.type = nextType;
      changed = true;
    }
    if(typeof x.active === 'undefined'){
      x.active = true;
      changed = true;
    }
    if(x.active && x.date && x.type === calendarBaselineForDate(x.date)){
      x.active = false;
      x.restoredToBaseline = true;
      changed = true;
    }
  });
  if(!ui().calendarMonth){
    ui().calendarMonth = TODAY.slice(0,7);
    changed = true;
  }
  if(changed) save();
}
function calendarRecordForDate(date){
  return Object.values(db.calendar.exceptions || {}).find(x=>x.date===date) || null;
}
function calendarActiveExceptionOn(date){
  const x = calendarRecordForDate(date);
  if(!x || x.active === false) return null;
  const type = calendarNormaliseType(x.type);
  if(type === calendarBaselineForDate(date)) return null;
  return x;
}

operatingStatusForDate = function(date){
  const x = calendarActiveExceptionOn(date);
  if(x){
    const type = calendarNormaliseType(x.type);
    return {text:type,source:'Operating exception',tone:calendarStatusTone(type)};
  }
  const baseline = calendarBaselineForDate(date);
  return {text:baseline,source:'Automatic weekly baseline',tone:calendarStatusTone(baseline)};
};

const calendarMonthBaseChildren = calendarChildren;
calendarChildren = function(){
  return calendarMonthBaseChildren().filter(c=>{
    if(has('Head Teacher')) return true;
    return !!c.className && classInScope(c.className);
  });
};

function calendarEventVisibleToViewer(e){
  if(e.scope === 'Whole preschool') return true;
  if(has('Head Teacher') || has('System Administration')) return true;
  return currentPersona().scope === e.scope;
}
const calendarMonthBaseEventsOn = calendarEventsOn;
calendarEventsOn = function(date){
  return calendarMonthBaseEventsOn(date).filter(calendarEventVisibleToViewer);
};

function calendarMonthDateParts(monthKey){
  const [year,month] = monthKey.split('-').map(Number);
  return {year,month};
}
function calendarMonthLabel(monthKey){
  const {year,month} = calendarMonthDateParts(monthKey);
  return new Date(Date.UTC(year,month-1,1)).toLocaleDateString('en-GB',{month:'long',year:'numeric',timeZone:'UTC'});
}
function calendarMonthCells(monthKey){
  const {year,month} = calendarMonthDateParts(monthKey);
  const first = new Date(Date.UTC(year,month-1,1));
  const mondayOffset = (first.getUTCDay()+6)%7;
  const start = new Date(first);
  start.setUTCDate(first.getUTCDate()-mondayOffset);
  return Array.from({length:42},(_,i)=>{
    const d = new Date(start);
    d.setUTCDate(start.getUTCDate()+i);
    return d.toISOString().slice(0,10);
  });
}
function changeCalendarMonth(delta){
  calendarNormaliseStoredState();
  const {year,month} = calendarMonthDateParts(ui().calendarMonth);
  const d = new Date(Date.UTC(year,month-1+delta,1));
  ui().calendarMonth = d.toISOString().slice(0,7);
  save();
  render();
}
function calendarGoToday(){
  ui().calendarMonth = TODAY.slice(0,7);
  save();
  render();
}
function calendarOpenDay(date){
  openModal('calendar-day',{date});
}
function calendarShortStatus(type){
  type = calendarNormaliseType(type);
  if(type === 'Preschool + Daycare') return 'P+D';
  if(type === 'Daycare Only') return 'Daycare';
  return 'Closed';
}
function calendarDateLabel(date){
  return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric',timeZone:'UTC'});
}
function calendarCell(date,monthKey){
  const op = operatingStatusForDate(date);
  const events = calendarEventsOn(date);
  const holidays = holidayReferencesOn(date);
  const birthdays = birthdaysOn(date);
  const inMonth = date.slice(0,7) === monthKey;
  const day = Number(date.slice(8,10));
  const context = [
    ...holidays.slice(0,2).map(h=>`<span class="cal-context-item holiday" title="${esc(h.name)}"><span>◐</span><span class="cal-context-text">${esc(h.name)}</span></span>`),
    ...events.slice(0,2).map(e=>`<span class="cal-context-item event" title="${esc(e.title)}"><span>●</span><span class="cal-context-text">${esc(e.title)}</span></span>`),
    ...birthdays.slice(0,2).map(c=>`<span class="cal-context-item birthday" title="${esc(c.name)} birthday"><span>🎂</span><span class="cal-context-text">${esc(c.name)}</span></span>`)
  ];
  const extra = holidays.length+events.length+birthdays.length-context.length;
  if(extra>0) context.push(`<span class="cal-context-more">+${extra} more</span>`);
  return `<button class="cal-day ${inMonth?'':'outside'} ${date===TODAY?'today':''}" onclick="calendarOpenDay('${date}')" aria-label="${esc(calendarDateLabel(date))}, ${esc(op.text)}">
    <span class="cal-day-top"><span class="cal-day-number">${day}</span>${date===TODAY?'<span class="cal-today-label">Today</span>':''}</span>
    <span class="cal-status ${op.tone}"><span class="cal-status-full">${esc(op.text)}</span><span class="cal-status-short">${esc(calendarShortStatus(op.text))}</span></span>
    <span class="cal-context">${context.join('')}</span>
  </button>`;
}
function calendarUpcomingVisibleEvents(monthKey){
  return Object.values(db.calendar.events || {})
    .filter(calendarEventVisibleToViewer)
    .filter(e=>e.date.slice(0,7)===monthKey)
    .sort((a,b)=>a.date.localeCompare(b.date));
}
function calendarVisibleBirthdaysInMonth(monthKey){
  const {year,month} = calendarMonthDateParts(monthKey);
  const mm = String(month).padStart(2,'0');
  return calendarChildren()
    .filter(c=>c.dob.slice(5,7)===mm)
    .map(c=>({...c,date:`${year}-${c.dob.slice(5)}`}))
    .sort((a,b)=>a.date.localeCompare(b.date));
}

renderCalendar = function(){
  calendarNormaliseStoredState();
  const monthKey = ui().calendarMonth;
  const cells = calendarMonthCells(monthKey);
  const canManage = calendarCanManage();
  const active = Object.values(db.calendar.exceptions || {})
    .filter(x=>calendarActiveExceptionOn(x.date)?.id===x.id)
    .sort((a,b)=>a.date.localeCompare(b.date));
  const events = calendarUpcomingVisibleEvents(monthKey);
  const birthdays = calendarVisibleBirthdaysInMonth(monthKey);
  const imported = Object.values(db.calendar.holidays || {}).filter(h=>h.datasetYear===Number(monthKey.slice(0,4)));
  const actions = canManage
    ? `${btn('Change operating day',`openModal('calendar-exception',{date:'${TODAY}'})`,'primary')}${btn('Add event',`openModal('calendar-event',{date:'${TODAY}'})`,'secondary')}${btn(imported.length?'Review Sri Lankan holidays':'Load Sri Lankan holidays',"openModal('holiday-import')",'secondary')}`
    : '';
  return shell(`${pageHead('Organisation calendar','Calendar','A familiar month calendar for operating days and important preschool context. What you can see still follows your existing permissions.',actions)}
    <div class="calendar-card card">
      <div class="calendar-toolbar">
        <div>
          <div class="eyebrow">Month view</div>
          <h3>${calendarMonthLabel(monthKey)}</h3>
          <p>Monday–Friday defaults to Preschool + Daycare. Weekends default to Closed.</p>
        </div>
        <div class="calendar-nav-actions">
          ${btn('‹ Previous','changeCalendarMonth(-1)','secondary','sm')}
          ${btn('Today','calendarGoToday()','secondary','sm')}
          ${btn('Next ›','changeCalendarMonth(1)','secondary','sm')}
        </div>
      </div>
      <div class="calendar-weekdays">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div>${d}</div>`).join('')}</div>
      <div class="calendar-month-grid">${cells.map(d=>calendarCell(d,monthKey)).join('')}</div>
      <div class="calendar-legend">
        <span><i class="legend-dot operating"></i> Operating status</span>
        <span><i class="legend-dot event"></i> Event</span>
        <span><i class="legend-dot holiday"></i> Holiday reference</span>
        ${calendarChildren().length?'<span>🎂 Birthday · shown only within your existing child/class access</span>':''}
      </div>
    </div>
    <div class="grid" style="margin-top:14px">
      <div class="${canManage?'span-7':'span-12'} card">
        <div class="card-header"><div class="grow"><h3>${canManage?'Active operating-day changes':'This month at a glance'}</h3><p>${canManage?'Only dates that differ from the automatic weekly schedule. Restored dates fall back to the baseline while their history is kept.':'Tap any date above for its operating status and the context you are allowed to see.'}</p></div></div>
        ${canManage
          ? (active.map(x=>`<div class="child-row"><strong>${fmtDate(x.date)}</strong><span>${badge(calendarNormaliseType(x.type),calendarStatusTone(x.type))}</span><span class="hide-mobile">${esc(x.reason||'')}</span><span>${btn('Amend',`openModal('calendar-exception',{id:'${x.id}',date:'${x.date}'})`,'secondary','sm')}</span></div>`).join('') || '<div class="empty">No active operating-day changes. The automatic weekly schedule is in force.</div>')
          : `<div class="notice info">Calendar is viewable by all staff, but operating-day changes remain restricted to Head Teacher / authorised administration.</div>`}
      </div>
      ${canManage?`<div class="span-5 card"><h3>Month context</h3><p style="margin-bottom:10px">Events remain separate from operating status.</p>${events.map(e=>`<div class="child-row"><strong>${esc(e.title)}</strong><span>${fmtDate(e.date)}</span><span class="hide-mobile">${esc(e.scope)}</span></div>`).join('')||'<div class="empty">No visible staff-created events this month.</div>'}${birthdays.length?`<div class="section-title" style="margin-top:16px">DOB-derived birthdays</div>${birthdays.map(c=>`<div class="child-row"><strong>${esc(c.name)}</strong><span>${fmtDate(c.date)}</span><span>${badge('DOB-derived','green')}</span></div>`).join('')}`:''}</div>`:''}
    </div>`);
};

function calendarDayModal(date){
  const op = operatingStatusForDate(date);
  const events = calendarEventsOn(date);
  const holidays = holidayReferencesOn(date);
  const birthdays = birthdaysOn(date);
  const record = calendarRecordForDate(date);
  const active = calendarActiveExceptionOn(date);
  const canManage = calendarCanManage();
  const context = [
    ...holidays.map(h=>`<div class="calendar-detail-row"><span>${badge('Holiday reference','purple')}</span><div><strong>${esc(h.name)}</strong><div class="sub">${esc(h.category||'Public holiday reference')} · does not decide whether MPS is open</div></div></div>`),
    ...events.map(e=>`<div class="calendar-detail-row"><span>${badge('Event','blue')}</span><div><strong>${esc(e.title)}</strong><div class="sub">${esc(e.scope)}${e.note?` · ${esc(e.note)}`:''}</div></div></div>`),
    ...birthdays.map(c=>`<div class="calendar-detail-row"><span>${badge('Birthday','green')}</span><div><strong>🎂 ${esc(c.name)}</strong><div class="sub">Derived from DOB already held in MPS</div></div></div>`)
  ].join('');
  let history = '';
  if(canManage && record?.history?.length){
    history = `<div class="section-title" style="margin-top:16px">Operating amendment history</div>${record.history.slice().reverse().map(h=>`<div class="calendar-history"><strong>${esc(calendarNormaliseType(h.type))}</strong><span>${esc(h.reason||'No reason recorded')} · ${esc(h.by||'Staff')}</span></div>`).join('')}`;
  }
  const body = `${kv('Date',calendarDateLabel(date))}<div class="calendar-operating-summary">${badge(op.text,op.tone)}<span>${esc(op.source)}</span></div>${canManage&&active?.reason?`<div class="notice info"><strong>Current change reason:</strong> ${esc(active.reason)}</div>`:''}<div class="section-title" style="margin-top:16px">Important context</div>${context||'<div class="empty">No extra context for this date.</div>'}${history}`;
  let foot = btn('Close','closeOverlay()','secondary');
  if(canManage){
    const editData = record ? `{id:'${record.id}',date:'${date}'}` : `{date:'${date}'}`;
    foot = `${btn('Close','closeOverlay()','secondary')}${btn('Add event',`openModal('calendar-event',{date:'${date}'})`,'secondary')}${btn('Change operating status',`openModal('calendar-exception',${editData})`,'primary')}`;
  }
  return modal(calendarDateLabel(date),'Operating truth and contextual items stay separate.',body,foot);
}

function calendarExceptionModalV2(data={}){
  if(!calendarCanManage()) return modal('Calendar is view only','Your role can see Calendar but cannot change operating-day truth.',notice('Operating-day changes remain restricted to Head Teacher / authorised administration.','info'),btn('Close','closeOverlay()','secondary'));
  const date = data.date || db.calendar.exceptions?.[data.id]?.date || TODAY;
  const x = data.id ? db.calendar.exceptions?.[data.id] : calendarRecordForDate(date);
  const baseline = calendarBaselineForDate(date);
  const active = x && x.active !== false && calendarNormaliseType(x.type)!==baseline;
  const defaultType = active ? calendarNormaliseType(x.type) : (baseline==='Closed'?'Preschool + Daycare':'Closed');
  const title = active ? 'Amend operating day' : 'Change operating day';
  const body = `${field('Date',date,'date',!!x,'cal_date')}${selectField('Operating status',['Preschool + Daycare','Daycare Only','Closed'],defaultType,'cal_type')}${textArea('Reason',active?(x.reason||''):'','cal_reason')}${notice(`Automatic weekly schedule for this date: ${baseline}. Choosing that same status restores the automatic schedule instead of keeping a redundant exception.`,'info')}${x?.history?.length?notice('Previous amendments are retained in the date history.','info'):''}`;
  let foot = `${btn('Cancel','closeOverlay()','secondary')}${btn('Save change',`saveCalendarException(${x?`'${x.id}'`:'null'})`,'primary')}`;
  if(active) foot = `${btn('Cancel','closeOverlay()','secondary')}${btn('Restore normal schedule',`restoreCalendarBaseline('${x.id}')`,'secondary')}${btn('Save change',`saveCalendarException('${x.id}')`,'primary')}`;
  return modal(title,'Set the actual operating state. Special occasions belong in Events, not in the operating status.',body,foot);
}

saveCalendarException = function(id=null){
  if(!calendarCanManage()) return;
  const date = val('cal_date');
  const type = calendarNormaliseType(val('cal_type'));
  const reason = val('cal_reason').trim();
  if(!date){ alert('Choose a date.'); return; }
  if(!reason){ alert('Add a short reason for the operating-day change.'); return; }
  const baseline = calendarBaselineForDate(date);
  let old = id ? db.calendar.exceptions?.[id] : calendarRecordForDate(date);
  if(!old && type===baseline){
    closeOverlay();
    return;
  }
  const eid = old?.id || id || `ex_${Date.now()}`;
  const historyType = type===baseline ? `Restored to automatic baseline (${baseline})` : type;
  const history = [...(old?.history||[]),{at:new Date().toISOString(),by:currentPersona().name,type:historyType,reason}];
  db.calendar.exceptions[eid] = {
    ...(old||{}),
    id:eid,
    date,
    type,
    reason,
    active:type!==baseline,
    restoredToBaseline:type===baseline,
    history
  };
  closeOverlay();
};

function restoreCalendarBaseline(id){
  if(!calendarCanManage()) return;
  const x = db.calendar.exceptions?.[id];
  if(!x) return;
  const reason = val('cal_reason').trim();
  if(!reason){ alert('Add a short reason for restoring the normal schedule.'); return; }
  const baseline = calendarBaselineForDate(x.date);
  x.type = baseline;
  x.reason = reason;
  x.active = false;
  x.restoredToBaseline = true;
  x.history = [...(x.history||[]),{at:new Date().toISOString(),by:currentPersona().name,type:`Restored to automatic baseline (${baseline})`,reason}];
  closeOverlay();
}

function calendarEventModalV2(data={}){
  if(!calendarCanManage()) return modal('Calendar is view only','Your role can see Calendar but cannot add events.',notice('This decision did not broaden existing Calendar editing permissions.','info'),btn('Close','closeOverlay()','secondary'));
  const date = data.date || TODAY;
  return modal('Add important-date event','Events explain what is happening; they do not change operating status.',`${field('Title','International Flags Day','text',false,'evt_title')}${field('Date',date,'date',false,'evt_date')}${selectField('Scope',['Whole preschool','Baby Class','Upper Class'],'Whole preschool','evt_scope')}${textArea('Optional note','Planning context only.','evt_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save event','saveCalendarEvent()','primary')}`);
}
const calendarMonthBaseSaveEvent = saveCalendarEvent;
saveCalendarEvent = function(){
  if(!calendarCanManage()) return;
  calendarMonthBaseSaveEvent();
};

holidayImportModal = function(){
  if(!calendarCanManage()) return modal('Calendar is view only','Your role can see imported holiday references but cannot manage the reference load.',notice('Holiday-reference management permissions have not been broadened.','info'),btn('Close','closeOverlay()','secondary'));
  const year = '2026';
  const rows = SL_HOLIDAYS_2026;
  const existing = Object.values(db.calendar.holidays||{}).filter(h=>h.datasetYear===2026).length;
  return modal(existing?'Review Sri Lankan holiday references':'Load Sri Lankan holiday references','Preview first; the import adds reference context only and never overwrites operating-day decisions.',`${selectField('Year',['2026'],year,'holiday_year')}${kv('Prototype dataset',typeof CALENDAR_REFERENCE_VERSION!=='undefined'?CALENDAR_REFERENCE_VERSION:'Sri Lanka government 2026 public/Poya holiday reference')}${kv('Dataset records',String(rows.length))}${notice('Production source/provider selection remains a later technical decision. This prototype proves the review-and-confirm workflow only.','info')}<div class="table-wrap"><table class="table"><thead><tr><th>Date</th><th>Holiday</th><th>Category</th><th>Operating decision</th></tr></thead><tbody>${rows.map(h=>{const x=calendarActiveExceptionOn(h.date);return `<tr><td>${fmtDate(h.date)}</td><td>${esc(h.name)}</td><td>${badge(h.category,h.category.includes('Poya')?'purple':'blue')}</td><td>${x?`${badge(calendarNormaliseType(x.type),calendarStatusTone(x.type))}<div class="sub">Existing decision kept</div>`:`${badge(calendarBaselineForDate(h.date),calendarStatusTone(calendarBaselineForDate(h.date)))}<div class="sub">Automatic schedule kept</div>`}</td></tr>`}).join('')}</tbody></table></div>`,`${btn('Cancel','closeOverlay()','secondary')}${btn(existing?'Refresh references':`Load ${rows.length} references`,"importSriLankaHolidayReferences()",'primary')}`);
};

const calendarMonthBaseHolidayImport = importSriLankaHolidayReferences;
importSriLankaHolidayReferences = function(){
  if(!calendarCanManage()) return;
  calendarMonthBaseHolidayImport();
};

const calendarMonthBaseModalView = modalView;
modalView = function(m){
  if(m?.name==='calendar-day') return calendarDayModal(m.data?.date||TODAY);
  if(m?.name==='calendar-exception') return calendarExceptionModalV2(m.data||{});
  if(m?.name==='calendar-event') return calendarEventModalV2(m.data||{});
  if(m?.name==='holiday-import') return holidayImportModal();
  return calendarMonthBaseModalView(m);
};

calendarNormaliseStoredState();
render();
// Owner Issue 010 — ready-to-use holiday references plus permission-aware Admissions visits and guardian birthdays.
function calendarEnsureProvidedHolidayReferences(){
  upgradeCalendarWorkspace();
  let changed = false;
  const expectedIds = new Set();
  SL_HOLIDAYS_2026.forEach(h=>{
    expectedIds.add(h.id);
    const desired = {
      ...h,
      datasetYear:2026,
      datasetVersion:typeof CALENDAR_REFERENCE_VERSION!=='undefined'?CALENDAR_REFERENCE_VERSION:'Sri Lanka 2026 public/Poya holiday reference',
      delivery:'MPS-provided reference'
    };
    const current = db.calendar.holidays[h.id];
    if(JSON.stringify(current)!==JSON.stringify(desired)){
      db.calendar.holidays[h.id]=desired;
      changed = true;
    }
  });
  Object.keys(db.calendar.holidays||{}).forEach(id=>{
    const h=db.calendar.holidays[id];
    if(h?.datasetYear===2026&&!expectedIds.has(id)){
      delete db.calendar.holidays[id];
      changed = true;
    }
  });
  if(db.calendar.holidayImports?.['2026']){
    delete db.calendar.holidayImports['2026'];
    changed = true;
  }
  if(changed) save();
}

holidayReferencesOn = function(date){
  calendarEnsureProvidedHolidayReferences();
  return Object.values(db.calendar.holidays||{}).filter(x=>x.date===date);
};
holidayReferencesOnRange = function(start,end){
  calendarEnsureProvidedHolidayReferences();
  return Object.values(db.calendar.holidays||{}).filter(h=>h.date>=start&&h.date<=end);
};

function calendarCanSeeAdmissionsTours(){
  return has('Head Teacher') || has('Admissions');
}
function calendarAdmissionsToursOn(date){
  if(!calendarCanSeeAdmissionsTours()) return [];
  return Object.values(db.admissions||{})
    .filter(c=>c.tour?.status==='scheduled'&&c.tour?.date===date)
    .map(c=>({
      id:`tour_${c.id}`,
      caseId:c.id,
      date:c.tour.date,
      time:c.tour.time||'',
      childName:c.childName,
      guardian:c.guardian,
      title:`Visit · ${c.childName}`
    }))
    .sort((a,b)=>(a.time||'').localeCompare(b.time||'')||a.childName.localeCompare(b.childName));
}
function calendarVisibleAdmissionsToursInMonth(monthKey){
  if(!calendarCanSeeAdmissionsTours()) return [];
  return Object.values(db.admissions||{})
    .filter(c=>c.tour?.status==='scheduled'&&c.tour?.date?.slice(0,7)===monthKey)
    .map(c=>({caseId:c.id,date:c.tour.date,time:c.tour.time||'',childName:c.childName,guardian:c.guardian,title:`Visit · ${c.childName}`}))
    .sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'').localeCompare(b.time||''));
}
function openAdmissionsCaseFromCalendar(caseId){
  if(!calendarCanSeeAdmissionsTours()||!allowed('admissions')) return;
  ui().route='admissions';
  ui().admissionsCase=caseId;
  ui().admissionsTab='overview';
  ui().modal=null;
  save();
  render();
  window.scrollTo({top:0,behavior:'smooth'});
}

function calendarGuardianSourceForCase(c){
  const o=c?.onboarding;
  if(!o||o.status!=='submitted') return [];
  const snapshot=o.snapshot?.data?.guardians;
  if(Array.isArray(snapshot)&&snapshot.length) return snapshot;
  return Array.isArray(o.draft?.guardians)?o.draft.guardians:[];
}
function calendarGuardianBirthdayVisible(c){
  if(has('Head Teacher')) return true;
  if(has('Accounts')||has('Social Media')||has('System Administration')) return false;
  if(has('Admissions')) return !!db.admissions?.[c.id];
  if(!(has('Class Teacher')||has('Daycare'))) return false;
  const child=calendarMonthBaseChildren().find(x=>x.id===c.id);
  return !!child?.className&&classInScope(child.className);
}
function calendarGuardianBirthdaysOn(date){
  const md=date.slice(5);
  if(has('Accounts')||has('Social Media')||has('System Administration')) return [];
  const rows=[];
  Object.values(db.admissions||{}).forEach(c=>{
    if(!calendarGuardianBirthdayVisible(c)) return;
    calendarGuardianSourceForCase(c).forEach((g,index)=>{
      if(!g?.name||!g?.dob||g.dob.length<10||g.dob.slice(5)!==md) return;
      rows.push({
        id:`guardian_${c.id}_${index}`,
        caseId:c.id,
        childId:c.id,
        childName:c.childName,
        name:g.name,
        relationship:g.relationship||'Guardian'
      });
    });
  });
  return rows.sort((a,b)=>a.name.localeCompare(b.name));
}
function calendarVisibleGuardianBirthdaysInMonth(monthKey){
  const {year,month}=calendarMonthDateParts(monthKey);
  const mm=String(month).padStart(2,'0');
  const rows=[];
  if(has('Accounts')||has('Social Media')||has('System Administration')) return rows;
  Object.values(db.admissions||{}).forEach(c=>{
    if(!calendarGuardianBirthdayVisible(c)) return;
    calendarGuardianSourceForCase(c).forEach((g,index)=>{
      if(!g?.name||!g?.dob||g.dob.length<10||g.dob.slice(5,7)!==mm) return;
      rows.push({id:`guardian_${c.id}_${index}`,caseId:c.id,childName:c.childName,name:g.name,relationship:g.relationship||'Guardian',date:`${year}-${g.dob.slice(5)}`});
    });
  });
  return rows.sort((a,b)=>a.date.localeCompare(b.date)||a.name.localeCompare(b.name));
}

calendarCell = function(date,monthKey){
  const op=operatingStatusForDate(date);
  const events=calendarEventsOn(date);
  const holidays=holidayReferencesOn(date);
  const tours=calendarAdmissionsToursOn(date);
  const birthdays=birthdaysOn(date);
  const guardianBirthdays=calendarGuardianBirthdaysOn(date);
  const inMonth=date.slice(0,7)===monthKey;
  const day=Number(date.slice(8,10));
  const context=[
    ...holidays.slice(0,1).map(h=>`<span class="cal-context-item holiday" title="${esc(h.name)}"><span>◐</span><span class="cal-context-text">${esc(h.name)}</span></span>`),
    ...events.slice(0,1).map(e=>`<span class="cal-context-item event" title="${esc(e.title)}"><span>●</span><span class="cal-context-text">${esc(e.title)}</span></span>`),
    ...tours.slice(0,1).map(t=>`<span class="cal-context-item tour" title="Admissions visit · ${esc(t.childName)}${t.time?` · ${esc(t.time)}`:''}"><span>◎</span><span class="cal-context-text">${esc(t.childName)}${t.time?` · ${esc(t.time)}`:''}</span></span>`),
    ...birthdays.slice(0,1).map(c=>`<span class="cal-context-item birthday" title="${esc(c.name)} birthday"><span>🎂</span><span class="cal-context-text">${esc(c.name)}</span></span>`),
    ...guardianBirthdays.slice(0,1).map(g=>`<span class="cal-context-item guardian-birthday" title="${esc(g.name)} birthday · ${esc(g.childName)} family"><span>🎂</span><span class="cal-context-text">${esc(g.name)}</span></span>`)
  ];
  const extra=holidays.length+events.length+tours.length+birthdays.length+guardianBirthdays.length-context.length;
  if(extra>0) context.push(`<span class="cal-context-more">+${extra} more</span>`);
  return `<button class="cal-day ${inMonth?'':'outside'} ${date===TODAY?'today':''}" onclick="calendarOpenDay('${date}')" aria-label="${esc(calendarDateLabel(date))}, ${esc(op.text)}">
    <span class="cal-day-top"><span class="cal-day-number">${day}</span>${date===TODAY?'<span class="cal-today-label">Today</span>':''}</span>
    <span class="cal-status ${op.tone}"><span class="cal-status-full">${esc(op.text)}</span><span class="cal-status-short">${esc(calendarShortStatus(op.text))}</span></span>
    <span class="cal-context">${context.join('')}</span>
  </button>`;
};

calendarDayModal = function(date){
  const op=operatingStatusForDate(date);
  const events=calendarEventsOn(date);
  const holidays=holidayReferencesOn(date);
  const tours=calendarAdmissionsToursOn(date);
  const birthdays=birthdaysOn(date);
  const guardianBirthdays=calendarGuardianBirthdaysOn(date);
  const record=calendarRecordForDate(date);
  const active=calendarActiveExceptionOn(date);
  const canManage=calendarCanManage();
  const context=[
    ...holidays.map(h=>`<div class="calendar-detail-row"><span>${badge('Holiday reference','purple')}</span><div><strong>${esc(h.name)}</strong><div class="sub">${esc(h.category||'Public holiday reference')} · provided automatically by MPS · does not decide whether MPS is open</div></div></div>`),
    ...events.map(e=>`<div class="calendar-detail-row"><span>${badge('Event','blue')}</span><div><strong>${esc(e.title)}</strong><div class="sub">${esc(e.scope)}${e.note?` · ${esc(e.note)}`:''}</div></div></div>`),
    ...tours.map(t=>`<div class="calendar-detail-row"><span>${badge('Admissions visit','blue')}</span><div><strong>◎ ${esc(t.childName)} · ${esc(t.time||'Time not set')}</strong><div class="sub">Prospective family: ${esc(t.guardian)} · reused from Admissions</div><div style="margin-top:6px">${btn('Open Admissions',`openAdmissionsCaseFromCalendar('${t.caseId}')`,'secondary','sm')}</div></div></div>`),
    ...birthdays.map(c=>`<div class="calendar-detail-row"><span>${badge('Child birthday','green')}</span><div><strong>🎂 ${esc(c.name)}</strong><div class="sub">Derived from Child DOB already held in MPS</div></div></div>`),
    ...guardianBirthdays.map(g=>`<div class="calendar-detail-row"><span>${badge('Guardian birthday','green')}</span><div><strong>🎂 ${esc(g.name)}</strong><div class="sub">${esc(g.childName)} · ${esc(g.relationship)} · birthday only; age and birth year are not shown</div></div></div>`)
  ].join('');
  let history='';
  if(canManage&&record?.history?.length){
    history=`<div class="section-title" style="margin-top:16px">Operating amendment history</div>${record.history.slice().reverse().map(h=>`<div class="calendar-history"><strong>${esc(calendarNormaliseType(h.type))}</strong><span>${esc(h.reason||'No reason recorded')} · ${esc(h.by||'Staff')}</span></div>`).join('')}`;
  }
  const body=`${kv('Date',calendarDateLabel(date))}<div class="calendar-operating-summary">${badge(op.text,op.tone)}<span>${esc(op.source)}</span></div>${canManage&&active?.reason?`<div class="notice info"><strong>Current change reason:</strong> ${esc(active.reason)}</div>`:''}<div class="section-title" style="margin-top:16px">Important context</div>${context||'<div class="empty">No extra context for this date.</div>'}${history}`;
  let foot=btn('Close','closeOverlay()','secondary');
  if(canManage){
    const editData=record?`{id:'${record.id}',date:'${date}'}`:`{date:'${date}'}`;
    foot=`${btn('Close','closeOverlay()','secondary')}${btn('Add event',`openModal('calendar-event',{date:'${date}'})`,'secondary')}${btn('Change operating status',`openModal('calendar-exception',${editData})`,'primary')}`;
  }
  return modal(calendarDateLabel(date),'Operating truth and contextual items stay separate.',body,foot);
};

renderCalendar = function(){
  calendarNormaliseStoredState();
  calendarEnsureProvidedHolidayReferences();
  const monthKey=ui().calendarMonth;
  const cells=calendarMonthCells(monthKey);
  const canManage=calendarCanManage();
  const active=Object.values(db.calendar.exceptions||{}).filter(x=>calendarActiveExceptionOn(x.date)?.id===x.id).sort((a,b)=>a.date.localeCompare(b.date));
  const events=calendarUpcomingVisibleEvents(monthKey);
  const tours=calendarVisibleAdmissionsToursInMonth(monthKey);
  const birthdays=calendarVisibleBirthdaysInMonth(monthKey);
  const guardianBirthdays=calendarVisibleGuardianBirthdaysInMonth(monthKey);
  const actions=canManage?`${btn('Change operating day',`openModal('calendar-exception',{date:'${TODAY}'})`,'primary')}${btn('Add event',`openModal('calendar-event',{date:'${TODAY}'})`,'secondary')}`:'';
  const contextSummary=[
    ...tours.map(t=>`<div class="child-row"><strong>${esc(t.childName)}</strong><span>${fmtDate(t.date)}${t.time?` · ${esc(t.time)}`:''}</span><span class="hide-mobile">Admissions visit</span></div>`),
    ...events.map(e=>`<div class="child-row"><strong>${esc(e.title)}</strong><span>${fmtDate(e.date)}</span><span class="hide-mobile">${esc(e.scope)}</span></div>`),
    ...birthdays.map(c=>`<div class="child-row"><strong>🎂 ${esc(c.name)}</strong><span>${fmtDate(c.date)}</span><span class="hide-mobile">Child birthday</span></div>`),
    ...guardianBirthdays.map(g=>`<div class="child-row"><strong>🎂 ${esc(g.name)}</strong><span>${fmtDate(g.date)}</span><span class="hide-mobile">${esc(g.childName)} · ${esc(g.relationship)}</span></div>`)
  ].sort((a,b)=>0);
  return shell(`${pageHead('Organisation calendar','Calendar','A familiar month calendar for operating days and important preschool context. What you can see still follows your existing permissions.',actions)}
    <div class="calendar-card card">
      <div class="calendar-toolbar"><div><div class="eyebrow">Month view</div><h3>${calendarMonthLabel(monthKey)}</h3><p>Monday–Friday defaults to Preschool + Daycare. Weekends default to Closed.</p></div><div class="calendar-nav-actions">${btn('‹ Previous','changeCalendarMonth(-1)','secondary','sm')}${btn('Today','calendarGoToday()','secondary','sm')}${btn('Next ›','changeCalendarMonth(1)','secondary','sm')}</div></div>
      <div class="calendar-weekdays">${['Mon','Tue','Wed','Thu','Fri','Sat','Sun'].map(d=>`<div>${d}</div>`).join('')}</div>
      <div class="calendar-month-grid">${cells.map(d=>calendarCell(d,monthKey)).join('')}</div>
      <div class="calendar-legend"><span><i class="legend-dot operating"></i> Operating status</span><span><i class="legend-dot event"></i> Event</span><span><i class="legend-dot holiday"></i> Sri Lankan holiday reference · already provided</span>${calendarCanSeeAdmissionsTours()?'<span><i class="legend-dot tour"></i> Admissions visit · restricted</span>':''}${calendarChildren().length||guardianBirthdays.length?'<span>🎂 Birthday · permission-aware</span>':''}</div>
    </div>
    <div class="grid" style="margin-top:14px">
      <div class="${canManage?'span-7':'span-12'} card"><div class="card-header"><div class="grow"><h3>${canManage?'Active operating-day changes':'This month at a glance'}</h3><p>${canManage?'Only dates that differ from the automatic weekly schedule. Restored dates fall back to the baseline while their history is kept.':'Tap any date above for its operating status and the context you are allowed to see.'}</p></div></div>${canManage?(active.map(x=>`<div class="child-row"><strong>${fmtDate(x.date)}</strong><span>${badge(calendarNormaliseType(x.type),calendarStatusTone(x.type))}</span><span class="hide-mobile">${esc(x.reason||'')}</span><span>${btn('Amend',`openModal('calendar-exception',{id:'${x.id}',date:'${x.date}'})`,'secondary','sm')}</span></div>`).join('')||'<div class="empty">No active operating-day changes. The automatic weekly schedule is in force.</div>'):`<div class="notice info">Calendar is viewable by all staff, but operating-day changes remain restricted to Head Teacher / authorised administration.</div>`}</div>
      ${canManage?`<div class="span-5 card"><h3>Month context</h3><p style="margin-bottom:10px">Context is reused from its source and remains separate from operating status.</p>${contextSummary.join('')||'<div class="empty">No additional visible context this month.</div>'}</div>`:''}
    </div>`);
};

holidayImportModal = function(){
  calendarEnsureProvidedHolidayReferences();
  return modal('Sri Lankan holiday references','MPS provides the configured Sri Lankan public/Poya reference dates automatically.',`${notice('There is nothing for staff to load. Holiday labels are reference context only and never change the operating status by themselves.','info')}${kv('Prototype reference',typeof CALENDAR_REFERENCE_VERSION!=='undefined'?CALENDAR_REFERENCE_VERSION:'Sri Lanka 2026 public/Poya holiday reference')}${kv('Reference dates',String(SL_HOLIDAYS_2026.length))}`,btn('Close','closeOverlay()','secondary'));
};
importSriLankaHolidayReferences = function(){
  calendarEnsureProvidedHolidayReferences();
  closeOverlay();
};

calendarEnsureProvidedHolidayReferences();
render();

// Owner Issue 011 / BQ-088 — Confirmed Interest requires a real positive signal.
const _mpsIssue011AdmissionCondition = admissionCondition;
admissionCondition = function(c){
  const stage = admissionDisplayStage(c);
  if(stage === 'Enquiry'){
    return c.followUp?.date ? `Follow up ${fmtDate(c.followUp.date)}` : 'Contact parent';
  }
  return _mpsIssue011AdmissionCondition(c);
};

const _mpsIssue011AdmissionOverview = admissionOverview;
admissionOverview = function(c){
  const d = admissionDerived(c);
  if(d.stage !== 'Enquiry') return _mpsIssue011AdmissionOverview(c);

  const followUp = c.followUp?.date;
  const title = followUp ? 'Next action · Follow up parent' : 'Next action · Contact parent';
  const sub = followUp
    ? `The previous contact attempt did not reach the parent. Follow up on ${fmtDate(followUp)} and record what happens.`
    : 'Contact the parent/guardian and record the real outcome. Do not assume continuing interest from the enquiry alone.';
  const button = followUp ? 'Record follow-up outcome' : 'Record contact outcome';
  const action = actionCard(title, sub, btn(button, `openModal('qualify-lead',{caseId:'${c.id}'})`, 'primary', 'sm'));
  const followUpRow = followUp ? kv('Next follow-up', fmtDate(followUp)) : '';

  return `${action}<div class="card" style="margin-top:12px"><h3>Admission details</h3>${kv('Lead source',`${c.source} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',c.reason||'—')}${followUpRow}${kv('Visit',c.tour?`${c.tour.status} · ${fmtDate(c.tour.date)} ${c.tour.time||''}`:'Not yet scheduled')}${kv('Application',applicationSummary(c))}${kv('Planned start',fmtDate(c.start))}</div>`;
};

function toggleEnquiryContactFields(){
  const outcome = val('enq_contact_outcome');
  const follow = byId('enq_followup_wrap');
  const lost = byId('enq_lost_wrap');
  if(follow) follow.style.display = outcome === 'Could not reach parent' ? '' : 'none';
  if(lost) lost.style.display = outcome === 'Not proceeding' ? '' : 'none';
}

function recordEnquiryContactOutcome(id){
  const c = db.admissions[id];
  if(!c) return;
  const method = val('enq_contact_method');
  const outcome = val('enq_contact_outcome');
  const note = val('enq_contact_note').trim();
  const detailNote = note ? ` · ${note}` : '';

  if(outcome === 'Wants to continue'){
    c.followUp = null;
    c.events.push(ev('contact_attempt','Parent contact',`${method} · Wants to continue${detailNote}`));
    c.events.push(ev('qualified','Confirmed Interest',`Real positive signal received via ${method}${detailNote}`));
    save();
    closeOverlay();
    return;
  }

  if(outcome === 'Could not reach parent'){
    const followUpDate = val('enq_followup_date');
    if(!followUpDate){ alert('Choose the next follow-up date.'); return; }
    c.followUp = {date:followUpDate,reason:'Could not contact',method,note};
    c.events.push(ev('contact_attempt','Parent contact attempt',`${method} · Could not reach parent · follow up ${fmtDate(followUpDate)}${detailNote}`));
    save();
    closeOverlay();
    return;
  }

  if(outcome === 'Not proceeding'){
    const reason = val('enq_lost_reason') || 'No longer interested';
    c.followUp = null;
    c.closed = {type:'Closed',reason};
    c.events.push(ev('non_conversion','Admissions journey closed',`${reason} · ${method}${detailNote}`));
    save();
    closeOverlay();
  }
}

const _mpsIssue011ModalView = modalView;
modalView = function(m){
  const n = m?.name, d = m?.data || {};
  if(n === 'qualify-lead'){
    const c = db.admissions[d.caseId];
    if(!c) return _mpsIssue011ModalView(m);
    const existingMethod = c.followUp?.method || 'Phone call';
    const existingNote = c.followUp?.note || '';
    const body = `${kv('Family',`${c.guardian} / ${c.childName}`)}${notice('Record what actually happened. Confirmed Interest requires a real positive signal; the enquiry itself is not enough.','info')}${selectField('Contact method',['Phone call','WhatsApp','Email','In person','Parent booked visit'],existingMethod,'enq_contact_method')}${selectField('Outcome',['Wants to continue','Could not reach parent','Not proceeding'],'Wants to continue','enq_contact_outcome','toggleEnquiryContactFields()')}${textArea('Factual note',existingNote,'enq_contact_note')}<div id="enq_followup_wrap" style="display:none">${field('Next follow-up date',c.followUp?.date||'','date',false,'enq_followup_date')}</div><div id="enq_lost_wrap" style="display:none">${selectField('Non-conversion reason',lostReasons,'No longer interested','enq_lost_reason')}</div>${notice('A visit and ability to pay are not required to confirm interest. If the parent has already taken an explicit progression action, such as booking a visit, record that positive signal rather than forcing a redundant call.','info')}`;
    return modal(c.followUp?.date ? 'Record follow-up outcome' : 'Record contact outcome','Keep the Admissions record aligned with the real conversation.',body,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`recordEnquiryContactOutcome('${c.id}')`,'primary')}`);
  }
  return _mpsIssue011ModalView(m);
};

// Owner Issue 012 / BQ-089 — keep Application lean but review the whole relevant Admissions story.
function latestAdmissionEvent(c, types){
  const wanted = Array.isArray(types) ? types : [types];
  return [...(c.events||[])].reverse().find(e=>wanted.includes(e.type)) || null;
}

function issue012VisitNote(c){
  if(c.tour?.note) return c.tour.note;
  const e = latestAdmissionEvent(c,'tour');
  if(!e?.detail) return '';
  const parts = String(e.detail).split(' · ');
  return parts.length>1 ? parts.slice(1).join(' · ').trim() : '';
}

const _mpsIssue012AdmissionApplication = admissionApplication;
admissionApplication = function(c){
  const a = c.application;
  if(!a || a.status === 'not_sent') return _mpsIssue012AdmissionApplication(c);

  const snap = a.snapshot?.data || a.draft || {};
  const contact = latestAdmissionEvent(c,['contact_attempt','qualified']);
  const visitNote = issue012VisitNote(c);
  const additionalInfo = c.tour?.additionalInfo || '';
  const decision = a.status === 'submitted'
    ? `<div class="section-title">Decision</div><div style="display:flex;gap:8px;flex-wrap:wrap">${btn('Decline',`openModal('decline-application',{caseId:'${c.id}'})`,'danger')}${btn(MPS_UI_COPY.applicationFamilyWithdrawalAction,`openModal('withdraw-application',{caseId:'${c.id}'})`,'secondary')}${btn('Waitlist',`openModal('waitlist-application',{caseId:'${c.id}'})`,'secondary')}${btn('Accept',`openModal('accept-application',{caseId:'${c.id}'})`,'primary')}</div>`
    : '';

  const contactValue = contact
    ? `${esc(contact.title || 'Admissions follow-up')}${contact.detail ? `<div class="sub">${esc(contact.detail)}</div>` : ''}`
    : 'No separate contact detail recorded in this prototype case';
  const visitValue = c.tour
    ? `${fmtDate(c.tour.date)}${c.tour.time ? ` · ${esc(c.tour.time)}` : ''}<div class="sub">${esc(c.tour.outcome || c.tour.status || 'Visit recorded')}</div>`
    : 'No visit recorded';

  return `<div class="grid">
    <div class="span-8 card">
      <div class="card-header"><div class="grow"><h3>Application review</h3><p>Use the whole Admissions history for the decision — not only the parent form.</p></div>${badge(applicationSummary(c),a.status==='submitted'?'purple':a.status==='accepted'?'green':'blue')}</div>
      <div class="section-title">Child & requested place</div>
      ${kv('Child',`${esc(snap.childName||c.childName)} ${prov(a.snapshot?'Parent submitted':'MPS reused',a.snapshot?'parent':'reused')}`)}
      ${kv('DOB',esc(snap.dob||c.dob))}
      ${kv('Guardian',esc(snap.guardian||c.guardian))}
      ${kv('Phone',esc(snap.phone||c.phone))}
      ${kv('Requested service',esc(snap.service||c.service))}
      ${kv('Desired start',fmtDate(snap.start||c.start))}
      ${snap.note?kv('Application note',`${esc(snap.note)} ${prov('Parent submitted','parent')}`):''}

      <div class="section-title">Admissions context</div>
      ${kv('Lead source',`${esc(c.source||'—')} ${prov('Admissions history','staff')}`)}
      ${kv('Reason for choice',esc(c.reason||'—'))}
      ${kv('Confirmed Interest / follow-up',contactValue)}
      ${kv('Visit',visitValue)}
      ${visitNote?kv('Visit note',`${esc(visitNote)} ${prov('Staff recorded','staff')}`):''}
      ${additionalInfo?kv('Additional information',`${esc(additionalInfo)} ${prov('Staff recorded at Visit','staff')}`):kv('Additional information','None recorded — this is optional and case-specific.')}

      ${notice('Detailed guardian, pickup, Health, documents, consents and other pre-start information remains in New Family Onboarding unless a particular fact is genuinely needed for this admissions decision.','info')}
      ${decision}
    </div>
    <div class="span-4 card">
      <h3>Decision readiness</h3>
      ${kv('Application',applicationSummary(c))}
      ${kv('Visit outcome',esc(c.tour?.outcome||'—'))}
      ${kv('Case-specific information',additionalInfo?'Recorded':'Not required by default')}
      ${notice('If you still need case-specific information before deciding, keep the Application under review. Do not accept just to move the workflow forward.','info')}
      <div class="section-title">Secure link</div>
      ${kv('Status',a.status==='sent'?'Sent / active':a.status==='submitted'?'Submitted':'Closed after decision')}
      ${kv('Parent account','Not required')}
      ${kv('Channel','Registered WhatsApp')}
      ${a.status==='sent'?btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm'):''}
    </div>
  </div>`;
};

const _mpsIssue012ModalView = modalView;
modalView = function(m){
  const n = m?.name, d = m?.data || {};
  if(n === 'complete-tour'){
    const c = db.admissions[d.caseId];
    if(!c) return _mpsIssue012ModalView(m);
    return modal('Complete visit','Record what actually happened. Ask extra questions only when this family/case genuinely needs them.',
      `${selectField('Outcome',['Family wants to proceed','Follow-up needed','Family not proceeding'],c.tour?.outcome||'Family wants to proceed','tour_outcome')}${textArea('Visit note',c.tour?.note||'','tour_note')}${textArea('Additional information for admission decision (optional)',c.tour?.additionalInfo||'','tour_additional_info')}${notice('There is no fixed extra questionnaire. Record only case-specific information that is useful to the admissions decision; detailed onboarding information stays later.','info')}`,
      `${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`completeTour('${c.id}')`,'primary')}`);
  }
  return _mpsIssue012ModalView(m);
};

const _mpsIssue012CompleteTour = completeTour;
completeTour = function(id){
  const c = db.admissions[id];
  if(!c?.tour) return _mpsIssue012CompleteTour(id);
  const outcome = val('tour_outcome');
  const note = val('tour_note').trim();
  const additionalInfo = val('tour_additional_info').trim();
  c.tour.status = 'completed';
  c.tour.outcome = outcome;
  c.tour.note = note;
  c.tour.additionalInfo = additionalInfo;
  if(outcome === 'Family not proceeding') c.closed = {type:'Withdrawn',reason:'Family not proceeding'};
  const details = [outcome,note,additionalInfo ? `Additional: ${additionalInfo}` : ''].filter(Boolean).join(' · ');
  addEvent(id,'tour','Visit completed',details);
  closeOverlay();
};
// Owner Issue 015 — Accepted must remain a real stage before Admission Fee.
const _mpsIssue015AdmissionOverview = admissionOverview;
admissionOverview = function(c){
  const html = _mpsIssue015AdmissionOverview(c);
  if(admissionDisplayStage(c)==='Accepted' && !c.fee){
    const action = actionCard(
      'Accepted · create admission-fee invoice',
      'The application is accepted. Create the admission-fee invoice when you are ready to move this family into the Admission Fee stage.',
      btn('Create admission-fee invoice',`openModal('issue-admission-fee',{caseId:'${c.id}'})`,'primary','sm')
    );
    return `${action}${html}`;
  }
  return html;
};

acceptApplication = function(id){
  const c = db.admissions[id];
  c.application.status = 'accepted';
  c.start = val('accept_start') || c.start;
  addEvent(id,'accepted','Application accepted',`${val('accept_class')} · ${fmtDate(c.start)}`);
  ui().admissionsStageFilter = 'Accepted';
  ui().admissionsTab = 'overview';
  closeOverlay();
};

function issueAdmissionFee(id){
  const c = db.admissions[id];
  if(!c || c.application.status!=='accepted' || c.fee) return closeOverlay();
  c.fee = {amount:15000,due:'2026-09-21',verified:0,pending:[],status:'pending'};
  addEvent(id,'fee_invoice','Admission-fee invoice issued','LKR 15,000');
  ui().admissionsStageFilter = 'Admission Fee';
  ui().admissionsTab = 'payments';
  closeOverlay();
}

const _mpsIssue015ModalView = modalView;
modalView = function(m){
  const n = m?.name, d = m?.data || {};
  if(n === 'issue-admission-fee'){
    const c = db.admissions[d.caseId];
    if(!c) return _mpsIssue015ModalView(m);
    return modal(
      'Create admission-fee invoice',
      'Acceptance is already recorded. Creating the invoice moves this family into the Admission Fee stage.',
      `${kv('Family',esc(c.childName))}${kv('Amount',money(15000))}${kv('Due date',fmtDate('2026-09-21'))}${notice('Accepted remains a separate stage until this invoice is created.','info')}`,
      `${btn('Cancel','closeOverlay()','secondary')}${btn('Create invoice',`issueAdmissionFee('${c.id}')`,'primary')}`
    );
  }
  return _mpsIssue015ModalView(m);
};
// Owner Issue 016 — payment evidence should be attached, not typed as a filename.
const _mpsIssue016ModalView = modalView;
modalView = function(m){
  const n = m?.name, d = m?.data || {};
  if(n === 'record-admission-payment'){
    const c = db.admissions[d.caseId];
    if(!c) return _mpsIssue016ModalView(m);
    const out = feeOutstanding(c.fee);
    return modal(
      'Record admission-fee payment',
      'Record what the family says was paid. It remains Pending Verification until an authorised real-source check.',
      `${kv('Family',c.childName)}${kv('Outstanding',money(out))}${selectField('Method',['Bank transfer','Cash'],'Bank transfer','adm_record_method')}${field('Amount',String(out),'number',false,'adm_record_amount')}${field('Reference','','text',false,'adm_record_reference')}<div class="field"><label>Optional payment evidence</label><input id="adm_record_evidence" type="file"><small>Attach a screenshot, receipt, deposit slip or other supporting file.</small></div>${notice('Attachment is optional. Verification against the real bank/cash source is still required.','info')}`,
      `${btn('Cancel','closeOverlay()','secondary')}${btn('Record payment',`recordAdmissionPayment('${c.id}')`,'primary')}`
    );
  }
  return _mpsIssue016ModalView(m);
};

recordAdmissionPayment = function(caseId){
  const c = db.admissions[caseId];
  const amount = Math.max(0,Number(val('adm_record_amount')||0));
  if(!amount){alert('Enter the payment amount.');return}
  const max = feeOutstanding(c.fee);
  if(amount>max){alert('The recorded amount cannot exceed the current admission-fee outstanding balance in this prototype.');return}
  const file = byId('adm_record_evidence')?.files?.[0] || null;
  const evidence = file ? {name:file.name,type:file.type||'',size:file.size||0} : null;
  const p = {id:'admp_'+Date.now(),amount,method:val('adm_record_method'),reference:val('adm_record_reference')||'No reference',evidence,status:'pending'};
  c.fee.pending.push(p);
  addEvent(caseId,'fee_payment_recorded','Admission-fee payment recorded',`${money(amount)} · Pending Verification${evidence?` · Evidence attached: ${evidence.name}`:''}`);
  closeOverlay();
};
// Owner Issue 017 — keep Waitlisted/Closed easy to retrieve without turning them into normal journey stages.
// Owner refinement (15 Sep 2026): these are contextual Application views, not global filters.
const admissionSecondaryFilters = ['Waitlisted','Closed'];

function admissionSecondaryOutcome(c){
  if(!c) return '';
  if(c.application?.status === 'waitlisted' && !c.closed) return 'Waitlisted';
  if(c.closed?.type === 'Declined') return 'Declined';
  if(c.closed?.type === 'Withdrawn') return 'Family withdrew';
  if(c.closed?.type === 'Released') return 'Place released';
  if(c.closed?.type === 'Closed') return '';
  return c.closed?.type || '';
}

function admissionIsApplicationClosed(c){
  if(!c?.closed) return false;
  return c.application?.status === 'declined' || c.application?.status === 'submitted';
}

function admissionMatchesFilter(c,filter){
  if(filter === 'All') return true;
  if(filter === 'Waitlisted') return c.application?.status === 'waitlisted' && !c.closed;
  if(filter === 'Closed') return admissionIsApplicationClosed(c);
  return admissionDisplayStage(c) === filter;
}

function admissionApplicationOutcomeContext(filter){
  return filter === 'Application' || admissionSecondaryFilters.includes(filter);
}

admissionsFilteredCases = function(){
  const filter = ui().admissionsStageFilter || 'All';
  return Object.values(db.admissions).filter(c=>admissionMatchesFilter(c,filter));
};

admissionsMetrics = function(){
  const all = Object.values(db.admissions);
  const active = ui().admissionsStageFilter || 'All';
  const applicationContext = admissionApplicationOutcomeContext(active);
  const primary = ['All',...admissionStageLabels];
  const renderPrimaryFilter = stage => {
    const count = all.filter(c=>admissionMatchesFilter(c,stage)).length;
    const selected = active === stage || (stage === 'Application' && applicationContext);
    return `<button class="tab ${selected?'active':''}" data-stage-filter="${esc(stage)}" onclick='setAdmissionsStageFilter(${JSON.stringify(stage)})'>${stage} <strong>${count}</strong></button>`;
  };
  const renderApplicationView = (label,filter) => {
    const count = all.filter(c=>admissionMatchesFilter(c,filter)).length;
    const stageAttr = filter === 'Application' ? '' : ` data-stage-filter="${esc(filter)}"`;
    return `<button class="tab ${active===filter?'active':''}" data-application-outcome-filter="${esc(label)}"${stageAttr} onclick='setAdmissionsStageFilter(${JSON.stringify(filter)})'>${label} <strong>${count}</strong></button>`;
  };
  const secondary = applicationContext
    ? `<div data-application-outcome-filters style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px"><div class="tabs" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">${renderApplicationView('Under review','Application')}${renderApplicationView('Waitlisted','Waitlisted')}${renderApplicationView('Closed','Closed')}</div></div>`
    : '';
  return `<div class="tabs" style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:0">${primary.map(renderPrimaryFilter).join('')}</div>${secondary}`;
};

caseListItem = function(c){
  const stage = admissionDisplayStage(c);
  const outcome = admissionSecondaryOutcome(c);
  let condition = admissionCondition(c);
  if(outcome === 'Waitlisted') condition = 'Waitlisted · review when capacity changes';
  else if(stage === 'Closed' && outcome) condition = `${outcome}${c.closed?.reason?` · ${c.closed.reason}`:''}`;
  const secondary = outcome && outcome !== stage ? `<span>${badge(outcome,outcome==='Waitlisted'?'amber':'grey')}</span>` : '';
  const searchable = (c.childName+' '+c.guardian+' '+stage+' '+outcome+' '+condition).toLowerCase();
  return `<div class="case-item ${ui().admissionsCase===c.id?'active':''}" data-stage="${esc(stage)}" data-search="${esc(searchable)}" onclick="setAdmissionCase('${c.id}')"><div class="top"><strong>${c.childName}</strong><span style="margin-left:auto;display:flex;gap:6px;align-items:center">${badge(stage,admissionStageTone(c))}${secondary}</span></div><div class="meta">${c.guardian} · ${c.service}${condition?`<br>${esc(condition)}`:''}</div></div>`;
};

const _mpsIssue017WaitlistApplication = waitlistApplication;
waitlistApplication = function(id){
  _mpsIssue017WaitlistApplication(id);
  ui().admissionsStageFilter = 'Waitlisted';
  save();
  render();
};

const _mpsIssue017DeclineApplication = declineApplication;
declineApplication = function(id){
  _mpsIssue017DeclineApplication(id);
  ui().admissionsStageFilter = 'Closed';
  save();
  render();
};

const _mpsIssue017WithdrawApplication = withdrawApplication;
withdrawApplication = function(id){
  _mpsIssue017WithdrawApplication(id);
  ui().admissionsStageFilter = 'Closed';
  save();
  render();
};

// Owner Issue 018 / BQ-090 — multiple possible duplicate candidates must all be resolved before creating a new Admissions record.
function duplicateCandidateRecords(){
  const p=ui().pendingEnquiry||{};
  return [
    {id:'existing_amara',childName:'Amara Perera',dob:'2023-10-18',guardian:p.guardian||'Sajana J.',phone:p.phone||'070 000 0000',status:'Enrolled · active family',className:'Upper Class',matchReason:'same guardian name + registered phone',matchStrength:'Strong family/contact match'},
    {id:'existing_dinu',childName:'Dinu Perera',dob:'2022-08-09',guardian:p.guardian||'Sajana J.',phone:p.phone||'070 000 0000',status:'Enrolled · active family',className:'Upper Class',matchReason:'same registered guardian phone',matchStrength:'Family/contact match'},
    {id:'existing_senal',childName:'Senal Perera',dob:'2024-01-27',guardian:'S. Jayawardena',phone:p.phone||'070 000 0000',status:'Application · under review',className:'Baby Class',matchReason:'same guardian phone on another admissions record',matchStrength:'Family/contact match'}
  ];
}

duplicateCandidateRecord = function(id){
  const candidates=duplicateCandidateRecords();
  return candidates.find(c=>c.id===id)||candidates[0];
};

function duplicateReviewState(){
  const p=ui().pendingEnquiry||{};
  if(!p.duplicateReviews||typeof p.duplicateReviews!=='object')p.duplicateReviews={};
  return p.duplicateReviews;
}

function duplicateCandidateCleared(id){return duplicateReviewState()[id]==='cleared'}
function duplicateAllCandidatesCleared(){const candidates=duplicateCandidateRecords();return candidates.length>0&&candidates.every(c=>duplicateCandidateCleared(c.id))}
function nextUnresolvedDuplicateCandidate(){return duplicateCandidateRecords().find(c=>!duplicateCandidateCleared(c.id))||null}
function duplicateClearedCount(){return duplicateCandidateRecords().filter(c=>duplicateCandidateCleared(c.id)).length}

const _mpsIssue018ModalView=modalView;
modalView=function(m){
  if(m?.name!=='duplicate-candidate')return _mpsIssue018ModalView(m);
  const p=ui().pendingEnquiry||{};
  const candidates=duplicateCandidateRecords();
  const reviews=duplicateReviewState();
  const cleared=duplicateClearedCount();
  const allCleared=cleared===candidates.length;
  const rows=candidates.map((c,index)=>{
    const done=reviews[c.id]==='cleared';
    return `<div class="card flat" data-duplicate-candidate="${esc(c.id)}" style="margin-top:8px"><div style="display:flex;gap:10px;align-items:flex-start"><div style="flex:1"><div class="eyebrow">Match ${index+1} of ${candidates.length} · ${esc(c.matchStrength)}</div><h3 style="margin-top:3px">${esc(c.childName)}</h3><p>${esc(c.matchReason)}</p><small>${esc(c.guardian)} · ${esc(c.status)}</small></div><div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;justify-content:flex-end">${badge(done?'Cleared as different':'Review needed',done?'green':'amber')}${btn('Review',`openDuplicateRecord('${c.id}')`,'secondary','sm')}</div></div></div>`;
  }).join('');
  const proceed=allCleared
    ? btn('Proceed as new record',"commitNewEnquiry('separate')",'primary')
    : `<button class="btn primary" type="button" disabled aria-disabled="true" title="Review and clear every possible match first">Proceed as new record</button>`;
  return modal('Possible family matches',`${candidates.length} possible matches found · ${cleared} of ${candidates.length} cleared`,`${kv('New enquiry',`${esc(p.childName||'')} · ${esc(p.phone||'')}`)}${notice('Review each candidate below. The detailed comparison is shown one candidate at a time so it stays easy to read on desktop and mobile. A shared guardian phone may legitimately belong to siblings; MPS never merges automatically.','warn')}${rows}`,`${btn('Edit enquiry',"editPendingEnquiry()",'secondary')}${proceed}`);
};

const _mpsIssue018DrawerView=drawerView;
drawerView=function(d){
  if(d?.name!=='duplicate-existing-record')return _mpsIssue018DrawerView(d);
  const p=ui().pendingEnquiry||{};
  const candidates=duplicateCandidateRecords();
  const c=duplicateCandidateRecord(d.data?.id);
  const index=Math.max(0,candidates.findIndex(x=>x.id===c.id));
  const clearedCount=duplicateClearedCount();
  const cleared=duplicateCandidateCleared(c.id);
  return drawer('Compare possible match',`Match ${index+1} of ${candidates.length} · ${clearedCount} cleared${cleared?' · already cleared as different':''}`,`${notice(`MPS flagged this candidate because of ${esc(c.matchReason)}. Matching family contact details can legitimately belong to another child in the same family.`,'info')}<div class="grid" style="margin-top:14px"><div class="span-6 card flat"><div class="eyebrow">New enquiry</div><h3>${esc(p.childName||'New child')}</h3>${kv('Date of birth',fmtDate(p.dob))}${kv('Guardian',esc(p.guardian||'—'))}${kv('Phone',esc(p.phone||'—'))}${kv('Interested service',esc(p.service||'—'))}</div><div class="span-6 card flat"><div class="eyebrow">Selected existing record</div><h3>${esc(c.childName)}</h3>${kv('Date of birth',fmtDate(c.dob))}${kv('Guardian',esc(c.guardian))}${kv('Phone',`${esc(c.phone)} ${c.phone===p.phone?badge('Match','amber'):''}`)}${kv('Current status',esc(c.status))}${kv('Programme / class',esc(c.className))}</div></div>${notice('If this is the same child/person, close the new enquiry as a duplicate against this record. If it is not the same child/person, clear this candidate. MPS will then move to the next match that still needs review.','warn')}`,`${btn('Back to all matches',"returnToDuplicateReview()",'secondary')}${btn('Not the same child/person',`clearDuplicateCandidate('${c.id}')`,'secondary')}${btn('Close new enquiry as duplicate',`closePendingAsDuplicate('${c.id}')`,'danger')}`);
};

const _mpsIssue018SaveNewEnquiry=saveNewEnquiry;
saveNewEnquiry=function(){
  _mpsIssue018SaveNewEnquiry();
  if(ui().pendingEnquiry){ui().pendingEnquiry.duplicateReviews={};delete ui().pendingEnquiry.duplicateReviewed;save();render()}
};

openDuplicateRecord=function(id){
  if(!ui().pendingEnquiry)return;
  const c=duplicateCandidateRecord(id);
  ui().modal=null;
  ui().drawer={name:'duplicate-existing-record',data:{id:c.id}};
  save();
  render();
};

function clearDuplicateCandidate(id){
  if(!ui().pendingEnquiry)return;
  duplicateReviewState()[id]='cleared';
  const next=nextUnresolvedDuplicateCandidate();
  ui().modal=null;
  ui().drawer=next?{name:'duplicate-existing-record',data:{id:next.id}}:null;
  if(!next)ui().modal={name:'duplicate-candidate',data:null};
  save();
  render();
}

returnToDuplicateReview=function(){ui().drawer=null;ui().modal={name:'duplicate-candidate',data:null};save();render()};

closePendingAsDuplicate=function(candidateId){
  const p=ui().pendingEnquiry;
  if(!p)return closeOverlay();
  const c=duplicateCandidateRecord(candidateId);
  if(!confirm(`Close the unsaved enquiry for ${p.childName} as a duplicate of ${c.childName}?`))return;
  ui().pendingEnquiry=null;
  ui().modal=null;
  ui().drawer=null;
  save();
  render();
};

const _mpsIssue018CommitNewEnquiry=commitNewEnquiry;
commitNewEnquiry=function(mode){
  const p=ui().pendingEnquiry;
  if(!p)return closeOverlay();
  if(!duplicateAllCandidatesCleared()){
    alert('Review and clear every possible match before proceeding as a new record.');
    return;
  }
  p.duplicateReviewed=true;
  _mpsIssue018CommitNewEnquiry(mode);
};
// Owner Issue 019 — duplicate-review candidates must be real Admissions records, not comparison-only fixtures.
function duplicateReviewFixtureRecords(){
  const guardian='Sajana J.';
  const phone='0714417525';
  return {
    existing_amara:{id:'existing_amara',childName:'Amara Perera',dob:'2023-10-18',guardian,phone,start:'2026-01-05',service:'Upper Class',source:'Existing-family referral',reason:'Reputation / recommendation / preschool legacy',events:[ev('enquiry','Enquiry created','Existing-family referral'),ev('qualified','Confirmed Interest','Family wants to continue'),ev('tour','Visit completed','Family wants to proceed'),ev('application_submitted','Application submitted',''),ev('accepted','Application accepted','Upper Class'),ev('fee_verified','Admission fee verified','LKR 15,000'),ev('enrolled','Enrolment created','Upper Class')],tour:{status:'completed',date:'2025-12-10',time:'10:00',outcome:'Family wants to proceed'},application:{status:'accepted',draft:{childName:'Amara Perera',dob:'2023-10-18',guardian,phone,service:'Upper Class',start:'2026-01-05',note:''},snapshot:null},fee:{amount:15000,due:'2025-12-20',verified:15000,pending:[],status:'satisfied'},enrolment:{status:'active',className:'Upper Class',service:'Preschool',start:'2026-01-05'},onboarding:null,closed:null},
    existing_dinu:{id:'existing_dinu',childName:'Dinu Perera',dob:'2022-08-09',guardian,phone,start:'2026-01-05',service:'Upper Class',source:'Existing-family referral',reason:'Reputation / recommendation / preschool legacy',events:[ev('enquiry','Enquiry created','Existing-family referral'),ev('qualified','Confirmed Interest','Family wants to continue'),ev('tour','Visit completed','Family wants to proceed'),ev('application_submitted','Application submitted',''),ev('accepted','Application accepted','Upper Class'),ev('fee_verified','Admission fee verified','LKR 15,000'),ev('enrolled','Enrolment created','Upper Class')],tour:{status:'completed',date:'2025-12-11',time:'10:30',outcome:'Family wants to proceed'},application:{status:'accepted',draft:{childName:'Dinu Perera',dob:'2022-08-09',guardian,phone,service:'Upper Class',start:'2026-01-05',note:''},snapshot:null},fee:{amount:15000,due:'2025-12-20',verified:15000,pending:[],status:'satisfied'},enrolment:{status:'active',className:'Upper Class',service:'Preschool',start:'2026-01-05'},onboarding:null,closed:null},
    existing_senal:{id:'existing_senal',childName:'Senal Perera',dob:'2024-01-27',guardian,phone,start:'2027-01-05',service:'Baby Class',source:'Phone call',reason:'Reputation / recommendation / preschool legacy',events:[ev('enquiry','Enquiry created','Phone call'),ev('qualified','Confirmed Interest','Family wants to continue'),ev('tour','Visit completed','Family wants to proceed'),ev('application_sent','Application link sent',''),ev('application_submitted','Application submitted','')],tour:{status:'completed',date:'2026-09-09',time:'11:00',outcome:'Family wants to proceed'},application:{status:'submitted',draft:{childName:'Senal Perera',dob:'2024-01-27',guardian,phone,service:'Baby Class',start:'2027-01-05',note:''},snapshot:{submittedAt:'2026-09-13T17:00',data:{childName:'Senal Perera'}}},fee:null,enrolment:null,onboarding:null,closed:null}
  };
}

function ensureDuplicateReviewFixtures(target){
  if(!target?.admissions)return target;
  const fixtures=duplicateReviewFixtureRecords();
  Object.entries(fixtures).forEach(([id,record])=>{if(!target.admissions[id])target.admissions[id]=record});
  return target;
}

const _mpsIssue019SeedDB=seedDB;
seedDB=function(){return ensureDuplicateReviewFixtures(_mpsIssue019SeedDB())};
ensureDuplicateReviewFixtures(db);
save();

duplicateCandidateRecords=function(){
  const meta=[
    {id:'existing_amara',matchReason:'same guardian name + registered phone',matchStrength:'Strong family/contact match'},
    {id:'existing_dinu',matchReason:'same registered guardian phone',matchStrength:'Family/contact match'},
    {id:'existing_senal',matchReason:'same guardian phone on another admissions record',matchStrength:'Family/contact match'}
  ];
  return meta.map(m=>{
    const c=db.admissions[m.id];
    const stage=admissionDisplayStage(c);
    const status=stage==='Enrolled'?'Enrolled · active family':stage==='Application'?'Application · under review':stage;
    const className=c.enrolment?.className||(c.service?.includes('Upper Class')?'Upper Class':'Baby Class');
    return {...c,status,className,matchReason:m.matchReason,matchStrength:m.matchStrength};
  });
};

// Owner Issue 020 / Admissions integrity audit — derive visible Admissions state from real records.
// This patch implements only already-approved business rules and straightforward data/UX corrections.

// ---- Shared prototype configuration / helpers ----
const MPS_ADMISSIONS_PROTOTYPE_CONFIG = {
  currency: 'LKR',
  admissionFeeByClass: {'Baby Class':15000,'Upper Class':15000},
  admissionFeeDeadlineDays: 7
};

function mpsAdmissionDatePlusDays(iso,days){
  const d = new Date(`${iso}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate()+Number(days||0));
  return d.toISOString().slice(0,10);
}
function mpsAdmissionToday(){ return typeof TODAY==='string' && TODAY ? TODAY : new Date().toISOString().slice(0,10); }
function mpsNormPhone(v){
  let s=String(v||'').replace(/\D/g,'');
  if(s.startsWith('0094')) s=s.slice(4);
  else if(s.startsWith('94') && s.length>9) s=s.slice(2);
  if(s.length===9) s='0'+s;
  return s;
}
function mpsNormName(v){
  return String(v||'').toLowerCase().normalize('NFKD').replace(/[^\p{L}\p{N}\s]/gu,' ').replace(/\s+/g,' ').trim();
}
function mpsAdmissionActor(){ try{return currentPersona()?.name||'Authorised staff'}catch(e){return 'Authorised staff'} }
function mpsAdmissionFeeGateSatisfied(f){ return !!f && (!!f.waived || Number(f.verified||0)>=Number(f.amount||0)); }
function mpsAdmissionEffectiveFeeStatus(f){
  if(!f) return '';
  if(mpsAdmissionFeeGateSatisfied(f)) return 'satisfied';
  if(f.due && f.due < mpsAdmissionToday()) return 'overdue';
  return f.status==='overdue'?'overdue':'pending';
}

// ---- Duplicate detection: candidates and reasons come from actual records ----
function mpsDuplicateSignals(p,c){
  const signals=[];
  const pPhone=mpsNormPhone(p.phone), cPhone=mpsNormPhone(c.phone);
  const pChild=mpsNormName(p.childName), cChild=mpsNormName(c.childName);
  const pGuardian=mpsNormName(p.guardian), cGuardian=mpsNormName(c.guardian);
  const phone=!!pPhone && pPhone===cPhone;
  const child=!!pChild && pChild===cChild;
  const guardian=!!pGuardian && pGuardian===cGuardian;
  const dob=!!p.dob && !!c.dob && p.dob===c.dob;
  if(child && dob) signals.push('same child name + date of birth');
  if(guardian && phone) signals.push('same guardian name + registered phone');
  else if(phone) signals.push('same registered guardian phone');
  if(child && guardian && !dob) signals.push('same child name + guardian name');
  return signals;
}
function mpsDuplicateScore(p,c){
  const reasons=mpsDuplicateSignals(p,c);
  if(!reasons.length) return 0;
  let score=0;
  if(reasons.includes('same child name + date of birth')) score+=100;
  if(reasons.includes('same guardian name + registered phone')) score+=80;
  if(reasons.includes('same registered guardian phone')) score+=50;
  if(reasons.includes('same child name + guardian name')) score+=60;
  return score;
}
duplicateCandidateRecords = function(){
  const p=ui().pendingEnquiry||{};
  return Object.values(db.admissions)
    .filter(c=>c && c.id && c.closed?.type!=='Duplicate')
    .map(c=>({c,reasons:mpsDuplicateSignals(p,c),score:mpsDuplicateScore(p,c)}))
    .filter(x=>x.reasons.length>0)
    .sort((a,b)=>b.score-a.score || String(a.c.childName).localeCompare(String(b.c.childName)))
    .map(({c,reasons,score})=>{
      const stage=admissionDisplayStage(c);
      const status=stage==='Enrolled'?'Enrolled · active family':stage==='Application'?'Application · under review':stage;
      const className=c.enrolment?.className||c.application?.acceptedPlacement?.className||(c.service?.includes('Upper Class')?'Upper Class':'Baby Class');
      return {...c,status,className,matchReason:reasons.join('; '),matchStrength:score>=100?'Very strong identity match':score>=80?'Strong family/contact match':'Possible family/contact match'};
    });
};
duplicateCandidateRecord = function(id){
  const xs=duplicateCandidateRecords();
  return xs.find(c=>c.id===id)||null;
};

function mpsCreatePendingEnquiryRecord(p,reviewedCandidates=[]){
  const id='case_'+Date.now();
  const detail=[p.source||'Other'];
  if(reviewedCandidates.length) detail.push(`${reviewedCandidates.length} possible match${reviewedCandidates.length===1?'':'es'} reviewed and cleared`);
  db.admissions[id]={
    id,
    childName:p.childName,
    dob:p.dob,
    guardian:p.guardian,
    phone:p.phone,
    start:p.start,
    service:p.service,
    source:p.source,
    reason:p.reason||'',
    message:p.message||'',
    events:[ev('enquiry','Enquiry created',detail.join(' · '))],
    tour:null,
    application:{status:'not_sent',draft:null,snapshot:null},
    fee:null,enrolment:null,onboarding:null,closed:null
  };
  ui().admissionsCase=id;
  ui().admissionsTab='overview';
  ui().admissionsStageFilter='Enquiry';
  ui().pendingEnquiry=null;
  ui().modal=null;
  ui().drawer=null;
  save();
  render();
  return id;
}

saveNewEnquiry = function(){
  const p={
    guardian:val('ne_guardian').trim(),
    phone:val('ne_phone').trim(),
    childName:val('ne_child').trim(),
    dob:val('ne_dob'),
    start:val('ne_start'),
    service:val('ne_service'),
    source:val('ne_source'),
    message:val('ne_message').trim(),
    reason:val('ne_reason')||'',
    duplicateReviews:{}
  };
  if(!p.guardian||!p.phone||!p.childName||!p.dob){alert('Enter the parent/contact, phone, child name and date of birth.');return}
  ui().pendingEnquiry=p;
  const candidates=duplicateCandidateRecords();
  if(!candidates.length){
    mpsCreatePendingEnquiryRecord(p,[]);
    return;
  }
  ui().modal={name:'duplicate-candidate',data:null};
  ui().drawer=null;
  save();
  render();
};

commitNewEnquiry = function(){
  const p=ui().pendingEnquiry;
  if(!p) return closeOverlay();
  const candidates=duplicateCandidateRecords();
  if(candidates.length && !duplicateAllCandidatesCleared()){
    alert('Review and clear every possible match before proceeding as a new record.');
    return;
  }
  mpsCreatePendingEnquiryRecord(p,candidates.map(c=>c.id));
};

closePendingAsDuplicate = function(candidateId){
  const p=ui().pendingEnquiry;
  if(!p) return closeOverlay();
  const c=duplicateCandidateRecord(candidateId);
  if(!c){alert('That candidate is no longer available. Review the matches again.');return}
  if(!confirm(`Close the incoming enquiry for ${p.childName} as a duplicate of ${c.childName}?`)) return;
  const actor=mpsAdmissionActor(), at=new Date().toISOString();
  c.duplicateEnquiries=c.duplicateEnquiries||[];
  c.duplicateEnquiries.push({
    childName:p.childName,dob:p.dob,guardian:p.guardian,phone:p.phone,start:p.start,
    service:p.service,source:p.source,message:p.message||'',resolvedAt:at,resolvedBy:actor
  });
  c.events.push(ev('duplicate_enquiry_retained','Duplicate enquiry retained',`${p.childName} · ${p.guardian} · ${p.phone} · source ${p.source}`));
  c.events.push(ev('duplicate_resolved','Duplicate enquiry resolved',`DUPLICATE_RESOLVED · incoming enquiry linked to this record · ${actor}`));
  ui().pendingEnquiry=null;ui().modal=null;ui().drawer=null;
  save();render();
};

// ---- Later-discovered established duplicate records (approved BQ-025) ----
function mpsEstablishedDuplicateEligible(c){
  return !!c && !c.closed && !c.enrolment && !c.fee;
}
function mpsEstablishedDuplicateOptions(duplicateId){
  return Object.values(db.admissions).filter(c=>c.id!==duplicateId && c.closed?.type!=='Duplicate');
}
function mpsOpenEstablishedDuplicate(id){openModal('mark-established-duplicate',{caseId:id})}
function mpsResolveEstablishedDuplicate(duplicateId){
  const duplicate=db.admissions[duplicateId];
  const survivorId=val('est_dup_survivor');
  const survivor=db.admissions[survivorId];
  if(!duplicate||!survivor||duplicate.id===survivor.id){alert('Choose the surviving Admissions record.');return}
  const actor=mpsAdmissionActor(), at=new Date().toISOString();
  duplicate.duplicateOf=survivor.id;
  duplicate.duplicateResolution={survivorId:survivor.id,resolvedAt:at,resolvedBy:actor};
  duplicate.closed={type:'Duplicate',reason:'Duplicate record',duplicateOf:survivor.id};
  survivor.duplicateRecords=survivor.duplicateRecords||[];
  if(!survivor.duplicateRecords.includes(duplicate.id)) survivor.duplicateRecords.push(duplicate.id);
  duplicate.events.push(ev('duplicate_resolved','Duplicate resolved',`DUPLICATE_RESOLVED · survivor ${survivor.childName} · ${actor}`));
  survivor.events.push(ev('duplicate_resolved','Duplicate record linked',`DUPLICATE_RESOLVED · duplicate ${duplicate.childName} preserved · ${actor}`));
  ui().admissionsCase=survivor.id;
  ui().admissionsStageFilter='All';
  ui().admissionsTab='timeline';
  closeOverlay();
}

// Add the approved established-duplicate action without changing stage semantics.
const _mpsAuditAdmissionOverview=admissionOverview;
admissionOverview=function(c){
  const html=_mpsAuditAdmissionOverview(c);
  if(!mpsEstablishedDuplicateEligible(c)) return html;
  const management=`<div class="card" style="margin-top:12px"><div class="card-header"><div class="grow"><h3>Record management</h3><p>Use only when staff later confirms that this established Admissions record is a duplicate of another record.</p></div>${btn('Mark as duplicate',`mpsOpenEstablishedDuplicate('${c.id}')`,'secondary','sm')}</div></div>`;
  return `${html}${management}`;
};
// ---- Application secure-link artefact: persistent, inspectable, Sent-only semantics ----
function mpsEnsureApplicationLink(c){
  if(!c.application.link){
    const created=mpsAdmissionToday();
    const token=`${String(c.id).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
    c.application.link={
      token,url:`https://apply.mps.example/a/${token}`,
      recipientName:c.guardian,recipientPhone:c.phone,
      createdAt:created,expiresAt:mpsAdmissionDatePlusDays(created,7),status:'Generated',sentAt:null,submittedAt:null
    };
    save();
  }
  return c.application.link;
}
sendApplication=function(id){
  const c=db.admissions[id];
  if(!c) return;
  if(!c.application.draft)c.application.draft={childName:c.childName,dob:c.dob,guardian:c.guardian,phone:c.phone,service:c.service,start:c.start,note:''};
  const link=mpsEnsureApplicationLink(c);
  link.status='Sent';
  link.sentAt=new Date().toISOString();
  c.application.status='sent';
  addEvent(id,'application_sent','Application link sent',`Registered WhatsApp · expires ${fmtDate(link.expiresAt)} · Sent`);
  closeOverlay();
};
const _mpsAuditSubmitApplication=submitApplication;
submitApplication=function(caseId){
  _mpsAuditSubmitApplication(caseId);
  const c=db.admissions[caseId];
  if(c?.application?.status==='submitted' && c.application.link){
    c.application.link.status='Submitted';
    c.application.link.submittedAt=c.application.snapshot?.submittedAt||new Date().toISOString();
    save();render();
  }
};

// Replace the Application review with the existing whole-story design plus a real link artefact.
admissionApplication=function(c){
  const a=c.application;
  if(!a || a.status==='not_sent') return `<div class="card"><h3>Application</h3><p>This family has not been sent an Application yet.</p><div style="margin-top:12px">${btn('Generate secure Application',`openModal('send-application',{caseId:'${c.id}'})`,'primary')}</div></div>`;
  const snap=a.snapshot?.data||a.draft||{};
  const contact=latestAdmissionEvent(c,['contact_attempt','qualified']);
  const visitNote=issue012VisitNote(c);
  const additionalInfo=c.tour?.additionalInfo||'';
  const decision=a.status==='submitted'
    ? `<div class="section-title">Decision</div><div style="display:flex;gap:8px;flex-wrap:wrap">${btn('Decline',`openModal('decline-application',{caseId:'${c.id}'})`,'danger')}${btn(MPS_UI_COPY.applicationFamilyWithdrawalAction,`openModal('withdraw-application',{caseId:'${c.id}'})`,'secondary')}${btn('Waitlist',`openModal('waitlist-application',{caseId:'${c.id}'})`,'secondary')}${btn('Accept',`openModal('accept-application',{caseId:'${c.id}'})`,'primary')}</div>`
    : '';
  const contactValue=contact?`${esc(String(contact.title||'Admissions follow-up').replace(/Qualified Lead/g,'Confirmed Interest'))}${contact.detail?`<div class="sub">${esc(String(contact.detail).replace(/Qualified Lead/g,'Confirmed Interest').replace(/\bTour\b/g,'Visit'))}</div>`:''}`:'No separate contact detail recorded in this prototype case';
  const visitValue=c.tour?`${fmtDate(c.tour.date)}${c.tour.time?` · ${esc(c.tour.time)}`:''}<div class="sub">${esc(c.tour.outcome||c.tour.status||'Visit recorded')}</div>`:'No visit recorded';
  const link=a.link;
  const linkCard=link
    ? `${kv('Status',esc(link.status))}${kv('Recipient',`${esc(link.recipientName)} · ${esc(link.recipientPhone)}`)}${kv('Created',fmtDate(link.createdAt))}${kv('Expires',fmtDate(link.expiresAt))}${kv('Secure link',`<span style="word-break:break-all">${esc(link.url)}</span>`)}${kv('Parent account','Not required')}${kv('Channel','Registered WhatsApp')}${a.status==='sent'?btn('Open parent preview',`openParentApplication('${c.id}')`,'secondary','sm'):''}`
    : `${kv('Status',a.status==='submitted'?'Submitted':'Closed after decision')}${kv('Parent account','Not required')}${kv('Channel','Registered WhatsApp')}`;
  return `<div class="grid"><div class="span-8 card">
    <div class="card-header"><div class="grow"><h3>Application review</h3><p>Use the whole Admissions history for the decision — not only the parent form.</p></div>${badge(applicationSummary(c),a.status==='submitted'?'purple':a.status==='accepted'?'green':'blue')}</div>
    <div class="section-title">Child & requested place</div>
    ${kv('Child',`${esc(snap.childName||c.childName)} ${prov(a.snapshot?'Parent submitted':'MPS reused',a.snapshot?'parent':'reused')}`)}
    ${kv('DOB',esc(snap.dob||c.dob))}${kv('Guardian',esc(snap.guardian||c.guardian))}${kv('Phone',esc(snap.phone||c.phone))}
    ${kv('Requested service',esc(snap.service||c.service))}${kv('Desired start',fmtDate(snap.start||c.start))}
    ${snap.note?kv('Application note',`${esc(snap.note)} ${prov('Parent submitted','parent')}`):''}
    <div class="section-title">Admissions context</div>
    ${kv('Lead source',`${esc(c.source||'—')} ${prov('Admissions history','staff')}`)}${kv('Reason for choice',esc(c.reason||'—'))}
    ${kv('Confirmed Interest / follow-up',contactValue)}${kv('Visit',visitValue)}
    ${visitNote?kv('Visit note',`${esc(visitNote)} ${prov('Staff recorded','staff')}`):''}
    ${additionalInfo?kv('Additional information',`${esc(additionalInfo)} ${prov('Staff recorded at Visit','staff')}`):kv('Additional information','None recorded — this is optional and case-specific.')}
    ${a.acceptedPlacement?`${kv('Accepted class',esc(a.acceptedPlacement.className))}${kv('Accepted start',fmtDate(a.acceptedPlacement.startDate))}`:''}
    ${notice('Detailed guardian, pickup, Health, documents, consents and other pre-start information remains in New Family Onboarding unless a particular fact is genuinely needed for this admissions decision.','info')}
    ${decision}
  </div><div class="span-4 card"><h3>Secure Application link</h3>${linkCard}</div></div>`;
};

// ---- Accepted placement + configurable/snapshotted admission-fee policy ----
acceptApplication=function(id){
  const c=db.admissions[id];
  if(!c) return;
  const className=val('accept_class');
  const startDate=val('accept_start')||c.start;
  if(!className||!startDate){alert('Choose the accepted class and start date.');return}
  c.application.status='accepted';
  c.application.acceptedPlacement={className,startDate,acceptedAt:mpsAdmissionToday(),acceptedBy:mpsAdmissionActor()};
  c.acceptedClass=className;
  c.start=startDate;
  addEvent(id,'accepted','Application accepted',`${className} · ${fmtDate(startDate)}`);
  ui().admissionsStageFilter='Accepted';
  ui().admissionsTab='overview';
  closeOverlay();
};
function mpsAdmissionFeeQuote(c){
  const className=c.application?.acceptedPlacement?.className||c.acceptedClass||(c.service?.includes('Upper Class')?'Upper Class':'Baby Class');
  const acceptedAt=c.application?.acceptedPlacement?.acceptedAt||mpsAdmissionToday();
  const amount=MPS_ADMISSIONS_PROTOTYPE_CONFIG.admissionFeeByClass[className];
  return {className,acceptedAt,amount,currency:MPS_ADMISSIONS_PROTOTYPE_CONFIG.currency,deadlineDays:MPS_ADMISSIONS_PROTOTYPE_CONFIG.admissionFeeDeadlineDays,due:mpsAdmissionDatePlusDays(acceptedAt,MPS_ADMISSIONS_PROTOTYPE_CONFIG.admissionFeeDeadlineDays)};
}
issueAdmissionFee=function(id){
  const c=db.admissions[id];
  if(!c||c.application.status!=='accepted'||c.fee) return closeOverlay();
  const q=mpsAdmissionFeeQuote(c);
  c.fee={amount:q.amount,currency:q.currency,due:q.due,verified:0,pending:[],status:'pending',waived:false,policySnapshot:{className:q.className,amount:q.amount,currency:q.currency,deadlineDays:q.deadlineDays,acceptedAt:q.acceptedAt}};
  addEvent(id,'fee_invoice','Admission-fee invoice issued',`${q.currency} ${Number(q.amount).toLocaleString('en-LK')} · due ${fmtDate(q.due)}`);
  ui().admissionsStageFilter='Admission Fee';ui().admissionsTab='payments';
  closeOverlay();
};

// Fee overdue is derived from due date; expiry never auto-releases the place.
const _mpsAuditAdmissionDerived=admissionDerived;
admissionDerived=function(c){
  if(c?.fee && !c.closed && !c.enrolment && c.application?.status==='accepted' && mpsAdmissionEffectiveFeeStatus(c.fee)==='overdue'){
    return {stage:'Accepted',status:'Fee overdue',statusTone:'red',next:'Decide overdue fee action'};
  }
  return _mpsAuditAdmissionDerived(c);
};

feeOutstanding=function(f){return !f?0:(f.waived?0:Math.max(0,Number(f.amount||0)-Number(f.verified||0)))};

// ---- Payment audit integrity ----
recordAdmissionPayment=function(caseId){
  const c=db.admissions[caseId];
  if(!c?.fee)return;
  const amount=Math.max(0,Number(val('adm_record_amount')||0));
  if(!amount){alert('Enter the payment amount.');return}
  const max=feeOutstanding(c.fee);
  if(amount>max){alert('The recorded amount cannot exceed the current admission-fee outstanding balance.');return}
  const file=byId('adm_record_evidence')?.files?.[0]||null;
  const evidence=file?{name:file.name,type:file.type||'',size:file.size||0}:null;
  const paymentDate=val('adm_record_date')||mpsAdmissionToday();
  const p={id:'admp_'+Date.now(),amount,paymentDate,method:val('adm_record_method'),reference:val('adm_record_reference')||'No reference',evidence,status:'pending',recordedBy:mpsAdmissionActor(),recordedAt:new Date().toISOString()};
  c.fee.pending=c.fee.pending||[];
  c.fee.pending.push(p);
  addEvent(caseId,'fee_payment_recorded','Admission-fee payment recorded',`${money(amount)} · ${fmtDate(paymentDate)} · Pending Verification${evidence?` · Evidence attached: ${evidence.name}`:''}`);
  closeOverlay();
};
verifyAdmissionPayment=function(caseId,paymentId){
  const c=db.admissions[caseId],p=c?.fee?.pending?.find(x=>x.id===paymentId);
  if(!p||p.status==='verified')return closeOverlay();
  p.status='verified';
  p.verification=val('adm_verification');
  p.verifiedBy=mpsAdmissionActor();
  p.verifiedAt=new Date().toISOString();
  c.fee.verified=Number(c.fee.verified||0)+Number(p.amount||0);
  c.fee.status=mpsAdmissionFeeGateSatisfied(c.fee)?'satisfied':'pending';
  addEvent(caseId,'fee_verified','Admission-fee payment verified',`${money(p.amount)} · ${p.verification} · ${p.verifiedBy}`);
  closeOverlay();
};
recordOverdueDecision=function(id){
  const c=db.admissions[id];
  if(!c?.fee)return;
  const action=val('overdue_action'),reason=val('overdue_reason').trim();
  if(!reason){alert('Enter the reason for this authorised decision.');return}
  const actor=mpsAdmissionActor(),at=new Date().toISOString();
  if(action==='Extend deadline'){
    const newDue=val('overdue_date');
    if(!newDue){alert('Choose the new deadline.');return}
    c.fee.due=newDue;c.fee.status='pending';
    addEvent(id,'fee_extended','Admission-fee deadline extended',`${fmtDate(newDue)} · ${reason} · ${actor}`);
  }else if(action==='Waive fee with reason'){
    c.fee.waived=true;c.fee.status='satisfied';c.fee.waiver={reason,by:actor,at};
    addEvent(id,'fee_waived','Admission fee waived',`${reason} · ${actor}`);
  }else{
    c.closed={type:'Released',reason,releasedAt:at,releasedBy:actor};
    addEvent(id,'released','Accepted place released',`${reason} · ${actor}`);
  }
  closeOverlay();
};
createEnrolment=function(id){
  const c=db.admissions[id];
  if(!c?.fee||!mpsAdmissionFeeGateSatisfied(c.fee)){alert('Fee gate is not satisfied.');return}
  const placement=c.application?.acceptedPlacement||{};
  const className=placement.className||c.acceptedClass||(c.service.includes('Upper')?'Upper Class':'Baby Class');
  const start=placement.startDate||c.start;
  c.enrolment={status:'active',className,service:c.service,start};
  c.onboarding=seedOnboarding(c.childName,c.childName.split(' ')[0],c.dob,c.guardian,c.phone,{});
  addEvent(id,'enrolled','Enrolment created',`${className} · ${fmtDate(start)}`);
  ui().admissionsTab='prestart';closeOverlay();
};

admissionPayments=function(c){
  if(!c.fee)return `<div class="card"><h3>Admission fee</h3><p>No fee gate exists yet for this case. It is created only after Acceptance.</p></div>`;
  const f=c.fee,payments=f.pending||[],outstanding=feeOutstanding(f),effective=mpsAdmissionEffectiveFeeStatus(f);
  const satisfied=mpsAdmissionFeeGateSatisfied(f);
  const rows=payments.length?payments.map(p=>{
    const audit=p.status==='verified'
      ? `${fmtDate(p.paymentDate)} · ${esc(p.reference||'No reference')} · ${esc(p.verification||'Verified')} · ${esc(p.verifiedBy||'Authorised staff')}${p.verifiedAt?` · ${new Date(p.verifiedAt).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}`:''}`
      : `${fmtDate(p.paymentDate)} · ${esc(p.reference||'No reference')}`;
    return `<div class="child-row"><strong>${money(p.amount)} · ${esc(p.method)}</strong><span>${badge(p.status,p.status==='pending'?'amber':'green')}</span><span class="hide-mobile">${audit}</span><span>${p.status==='pending'?btn('Verify',`openModal('verify-admission-payment',{caseId:'${c.id}',paymentId:'${p.id}'})`,'primary','sm'):'✓'}</span></div>`;
  }).join(''):'<div class="empty">No payment recorded yet.</div>';
  return `<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Admission fee</h3><p>Verified money and authorised waiver are separate facts.</p></div>${badge(effective==='overdue'?'Overdue':satisfied?'Satisfied':'In progress',effective==='overdue'?'red':satisfied?'green':'amber')}</div><div class="money">${money(f.amount)}</div>${kv('Due date',fmtDate(f.due))}${kv('Verified payment',money(f.verified||0))}${f.waived?kv('Waiver',`${badge('Authorised','green')} ${esc(f.waiver?.reason||'Reason recorded')}`):''}${kv('Outstanding',money(outstanding))}<div class="section-title">Payment activity</div>${rows}</div><div class="span-4 card"><h3>Controls</h3><p>Accepted is not Enrolled. Full verified settlement or an authorised waiver is required before conversion.</p>${!satisfied?`<div style="margin-top:10px">${btn('Record payment',`openModal('record-admission-payment',{caseId:'${c.id}'})`,'primary')}</div>`:''}${effective==='overdue'?`<div style="margin-top:8px">${btn('Overdue action',`openModal('overdue-fee',{caseId:'${c.id}'})`,'secondary')}</div>`:''}</div></div>`;
};
// ---- Current vocabulary in historical timelines ----
function mpsAdmissionTimelineText(v){
  return String(v||'').replace(/Marked Qualified Lead/g,'Confirmed Interest').replace(/\bQualified Lead\b/g,'Confirmed Interest').replace(/\bTour scheduled\b/g,'Visit scheduled').replace(/\bTour completed\b/g,'Visit completed').replace(/\bTour\b/g,'Visit');
}
admissionTimeline=function(c){
  const events=[...(c.events||[])].sort((a,b)=>String(a.at).localeCompare(String(b.at)));
  return `<div class="card"><h3>Case timeline</h3><p>Derived only from this family’s actual recorded events.</p><div class="timeline">${events.map(e=>`<div class="timeline-item"><b>${esc(mpsAdmissionTimelineText(e.title))}</b><div>${esc(mpsAdmissionTimelineText(e.detail||''))}${e.at?` · ${new Date(e.at).toLocaleString('en-GB',{day:'2-digit',month:'short',hour:'2-digit',minute:'2-digit'})}`:''}</div></div>`).join('')}</div></div>`;
};

// ---- Secure onboarding link artefact ----
function mpsEnsureOnboardingLink(c){
  const o=ensureOnboarding(c.id);
  if(!o.link){
    const created=mpsAdmissionToday();
    const token=`ONB-${String(c.id).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
    o.link={token,url:`https://onboard.mps.example/n/${token}`,recipientName:c.guardian,recipientPhone:c.phone,createdAt:created,expiresAt:mpsAdmissionDatePlusDays(created,7),status:'Generated',sentAt:null,submittedAt:null};
    save();
  }
  return o.link;
}
sendOnboarding=function(caseId){
  const c=db.admissions[caseId];if(!c)return;
  const o=ensureOnboarding(caseId),link=mpsEnsureOnboardingLink(c);
  o.status='sent';o.sentAt=new Date().toISOString();link.status='Sent';link.sentAt=o.sentAt;
  addEvent(caseId,'onboarding_sent','New Family Onboarding link sent',`Registered WhatsApp · time-limited prototype link · Sent`);
  save();render();
};
const _mpsAuditSubmitOnboarding=submitOnboarding;
submitOnboarding=function(caseId){
  _mpsAuditSubmitOnboarding(caseId);
  const c=db.admissions[caseId],o=c?.onboarding;
  if(o?.status==='submitted'&&o.link){o.link.status='Submitted';o.link.submittedAt=o.submittedAt;save();render()}
};
const _mpsAuditAdmissionPrestart=admissionPrestart;
admissionPrestart=function(c){
  const html=_mpsAuditAdmissionPrestart(c);
  if(!c.enrolment||!c.onboarding?.link)return html;
  const l=c.onboarding.link;
  const artifact=`<div class="card" style="margin-top:12px"><h3>New Family Onboarding link</h3>${kv('Status',esc(l.status))}${kv('Recipient',`${esc(l.recipientName)} · ${esc(l.recipientPhone)}`)}${kv('Created',fmtDate(l.createdAt))}${kv('Expires',fmtDate(l.expiresAt))}${kv('Secure link',`<span style="word-break:break-all">${esc(l.url)}</span>`)}${notice('This prototype uses an illustrative expiry to prove that the link is time-limited; exact production expiry is a later security/technical setting.','info')}</div>`;
  return `${html}${artifact}`;
};

// ---- Modal corrections / persistent artefacts ----
const _mpsAuditModalView=modalView;
modalView=function(m){
  const n=m?.name,d=m?.data||{};
  if(n==='new-enquiry'){
    const p=ui().pendingEnquiry||{};
    const reasonOptions=['',...reasons].map(x=>`<option value="${esc(x)}" ${x===(p.reason||'')?'selected':''}>${x?esc(x):'Not recorded yet'}</option>`).join('');
    return modal('New enquiry','Capture the minimum needed to start the family history.',`${selectField('How did you hear about us?',sources,p.source||'Facebook','ne_source')}<div class="form-grid">${field('Parent / contact name',p.guardian||'New Parent','text',false,'ne_guardian')}${field('Phone',p.phone||'070 000 0000','text',false,'ne_phone')}${field('Child name',p.childName||'New Child','text',false,'ne_child')}${field('Child DOB',p.dob||'2024-06-01','date',false,'ne_dob')}${field('Desired start',p.start||'2027-01-19','date',false,'ne_start')}${selectField('Interested service',['Baby Class','Upper Class'],p.service||'Baby Class','ne_service')}</div><div class="field"><label>Reason for choosing us (optional)</label><select id="ne_reason">${reasonOptions}</select></div>${textArea('Message',p.message||'Interested in 2027 admissions.','ne_message')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save enquiry',"saveNewEnquiry()",'primary')}`);
  }
  if(n==='send-application'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    const link=mpsEnsureApplicationLink(c);
    return modal('Send secure application','No parent account required.',`${kv('Recipient',`${esc(link.recipientName)} · ${esc(link.recipientPhone)}`)}${kv('Created',fmtDate(link.createdAt))}${kv('Expires',fmtDate(link.expiresAt))}${kv('Prefill','Enquiry + Visit information')}${field('Secure link',link.url,'text',true)}${textArea('Prepared WhatsApp message',`Hi ${c.guardian.split(' ')[0]}, thank you for visiting ${ORG}. Please use this secure link to review the details we already have and submit ${c.childName.split(' ')[0]}’s application.`,'app_message')}${notice('Manual WhatsApp records Sent only — not Delivered or Read. The displayed prototype expiry demonstrates that the link is time-limited; the exact production expiry is a later security/technical setting.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Copy & mark Sent',`sendApplication('${c.id}')`,'primary')}`);
  }
  if(n==='issue-admission-fee'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    const q=mpsAdmissionFeeQuote(c);
    return modal('Create admission-fee invoice','Acceptance is already recorded. The fee policy is snapshotted for this accepted application.',`${kv('Family',esc(c.childName))}${kv('Accepted class',esc(q.className))}${kv('Amount',`${q.currency} ${Number(q.amount).toLocaleString('en-LK')}`)}${kv('Accepted',fmtDate(q.acceptedAt))}${kv('Due date',`${fmtDate(q.due)} · ${q.deadlineDays} days from acceptance`)}${notice('This is tenant-configured prototype data, not a universal MPS fee amount.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create invoice',`issueAdmissionFee('${c.id}')`,'primary')}`);
  }
  if(n==='record-admission-payment'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    const out=feeOutstanding(c.fee);
    return modal('Record admission-fee payment','Record what the family says was paid. It remains Pending Verification until an authorised real-source check.',`${kv('Family',esc(c.childName))}${kv('Outstanding',money(out))}${selectField('Method',['Bank transfer','Cash'],'Bank transfer','adm_record_method')}${field('Payment date',mpsAdmissionToday(),'date',false,'adm_record_date')}${field('Amount',String(out),'number',false,'adm_record_amount')}${field('Reference','','text',false,'adm_record_reference')}<div class="field"><label>Optional payment evidence</label><input id="adm_record_evidence" type="file"><small>Attach a screenshot, receipt, deposit slip or other supporting file.</small></div>${notice('Attachment is optional. Verification against the real bank/cash source is still required.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record payment',`recordAdmissionPayment('${c.id}')`,'primary')}`);
  }
  if(n==='verify-admission-payment'){
    const c=db.admissions[d.caseId],p=c?.fee?.pending?.find(x=>x.id===d.paymentId);if(!c||!p)return _mpsAuditModalView(m);
    return modal('Verify admission-fee payment','Check the real source before marking Verified.',`${kv('Family',esc(c.childName))}${kv('Payment date',fmtDate(p.paymentDate))}${kv('Method',esc(p.method))}${kv('Amount',money(p.amount))}${kv('Reference',esc(p.reference||'No reference'))}${selectField('Verification method',['Bank app/account checked','Bank statement checked','Cash received','Payment-provider confirmation','Other authorised verification'],'Bank app/account checked','adm_verification')}${notice('The optional attachment is supporting evidence, not the control. The authorised real-source check is.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Verify payment',`verifyAdmissionPayment('${c.id}','${p.id}')`,'primary')}`);
  }
  if(n==='create-enrolment'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    const placement=c.application?.acceptedPlacement||{};
    const className=placement.className||c.acceptedClass||(c.service?.includes('Upper')?'Upper Class':'Baby Class');
    const startDate=placement.startDate||c.start;
    return modal('Create enrolment','Reuse the accepted Application; do not create the family again.',`${kv('Child',esc(c.childName))}${kv('Accepted class',esc(className))}${kv('Start date',fmtDate(startDate))}${kv('Admission-fee gate',mpsAdmissionFeeGateSatisfied(c.fee)?'Satisfied':'Not satisfied')}${notice('Enrolment reuses the accepted placement and the existing Admissions history.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create enrolment',`createEnrolment('${c.id}')`,'primary')}`);
  }
  if(n==='overdue-fee'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    return modal('Admission fee overdue','The place is not released automatically.',`${kv('Application',`${esc(c.childName)} · Accepted`)}${kv('Fee',money(c.fee.amount))}${kv('Due date',fmtDate(c.fee.due))}${selectField('Authorised action',['Extend deadline','Waive fee with reason','Release / close place with reason'],'Extend deadline','overdue_action')}${field('New deadline',mpsAdmissionDatePlusDays(mpsAdmissionToday(),7),'date',false,'overdue_date')}${textArea('Reason','','overdue_reason')}${notice('Every extension, waiver or release requires an explicit reason and is retained in the case history.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Record decision',`recordOverdueDecision('${c.id}')`,'primary')}`);
  }
  if(n==='mark-established-duplicate'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView(m);
    const options=mpsEstablishedDuplicateOptions(c.id);
    const opts=options.map(x=>`<option value="${esc(x.id)}">${esc(x.childName)} · ${esc(x.guardian)} · ${esc(x.phone)}</option>`).join('');
    return modal('Mark Admissions record as duplicate','Choose the surviving record. MPS preserves this record and its history, removes it from the active pipeline, and links it durably to the survivor.',`${kv('Duplicate record',`${esc(c.childName)} · ${esc(c.guardian)}`)}<div class="field"><label>Surviving record</label><select id="est_dup_survivor"><option value="">Select record…</option>${opts}</select></div>${notice('This is not an ordinary lost lead and does not delete either history.','warn')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Mark as duplicate',`mpsResolveEstablishedDuplicate('${c.id}')`,'danger')}`);
  }
  return _mpsAuditModalView(m);
};
// Owner Issues 020–021 / BQ-091 — Admissions audit completion and approved waitlist re-entry.

// Application / Under review is a distinct view: waitlisted cases do not also appear as under review.
const _mpsAuditAdmissionMatchesFilter = admissionMatchesFilter;
admissionMatchesFilter = function(c,filter){
  if(filter === 'Application') return !c?.closed && ['sent','submitted'].includes(c?.application?.status);
  return _mpsAuditAdmissionMatchesFilter(c,filter);
};

// Malithi values are tenant prototype configuration, not reusable MPS constants.
function mpsAdmissionsTenantPolicy(){
  db.productConfig=db.productConfig||{};
  db.productConfig.admissions=db.productConfig.admissions||{
    currency:'LKR',
    admissionFeeDeadlineDays:7,
    admissionFeeByProgramme:{'Baby Class':15000,'Upper Class':15000},
    programmes:{
      'Baby Class':{classrooms:['Baby Class']},
      'Upper Class':{classrooms:['Upper Class']}
    }
  };
  return db.productConfig.admissions;
}

// BQ-091 — a waitlisted Application may return to the same Application review; history is preserved.
function returnWaitlistedApplication(id){
  const c=db.admissions[id];
  if(!c || c.application?.status!=='waitlisted') return;
  c.application.status='submitted';
  addEvent(id,'waitlist_returned','Application returned to review',`Waitlist paused; same Application reopened for decision · ${mpsAdmissionActor()}`);
  ui().admissionsStageFilter='Application';
  ui().admissionsCase=id;
  ui().admissionsTab='application';
  closeOverlay();
}

const _mpsAudit021AdmissionApplication = admissionApplication;
admissionApplication = function(c){
  let html=_mpsAudit021AdmissionApplication(c);
  if(c?.application?.status==='waitlisted' && !c.closed){
    const action=actionCard(
      'Waitlisted · return to active review',
      'This reopens the same Application for a decision. The parent submission and complete waitlist history stay on this family record.',
      btn('Return to review',`returnWaitlistedApplication('${c.id}')`,'primary','sm')
    );
    html=`${action}${html}`;
  }
  const link=c?.application?.link;
  if(link){
    const exactExpiry=kv('Expires',fmtDate(link.expiresAt));
    html=html.replace(exactExpiry,kv('Expiry','Time-limited · production duration not yet specified'));
  }
  return html;
};

const _mpsAuditAdmissionCondition2 = admissionCondition;
admissionCondition = function(c){
  if(!c?.closed && c?.tour?.status==='completed' && c?.tour?.outcome==='Follow-up needed' && c?.application?.status==='not_sent') return 'Visit follow-up needed';
  return _mpsAuditAdmissionCondition2(c);
};

const _mpsAuditAdmissionOverview2 = admissionOverview;
admissionOverview = function(c){
  if(!c?.closed && c?.tour?.status==='completed' && c?.tour?.outcome==='Follow-up needed' && c?.application?.status==='not_sent'){
    const action=actionCard(
      'Next action · Follow up after visit',
      'The Visit is complete but the family is not yet recorded as ready for Application. Update the factual Visit outcome when the follow-up is resolved.',
      btn('Update visit outcome',`openModal('complete-tour',{caseId:'${c.id}'})`,'primary','sm')
    );
    return `${action}<div class="card" style="margin-top:12px"><h3>Admission details</h3>${kv('Lead source',`${esc(c.source||'—')} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',esc(c.reason||'—'))}${kv('Visit',`${fmtDate(c.tour.date)} · ${esc(c.tour.time||'')} · ${esc(c.tour.outcome)}`)}${kv('Application',applicationSummary(c))}${kv('Planned start',fmtDate(c.start))}</div>`;
  }
  return _mpsAuditAdmissionOverview2(c);
};

const _mpsAuditSendApplication2 = sendApplication;
sendApplication = function(id){
  const c=db.admissions[id];
  if(c?.tour?.status==='completed' && c.tour.outcome!=='Family wants to proceed'){
    alert('Resolve the Visit follow-up before sending the Application.');
    return;
  }
  return _mpsAuditSendApplication2(id);
};

acceptApplication = function(id){
  const c=db.admissions[id];
  if(!c) return;
  const programme=val('accept_programme');
  const classroom=val('accept_classroom');
  const startDate=val('accept_start')||c.start;
  if(!programme||!classroom||!startDate){alert('Choose the accepted programme, classroom and start date.');return}
  c.application.status='accepted';
  c.application.acceptedPlacement={programme,classroom,className:classroom,startDate,acceptedAt:mpsAdmissionToday(),acceptedBy:mpsAdmissionActor()};
  c.acceptedProgramme=programme;
  c.acceptedClassroom=classroom;
  c.acceptedClass=classroom;
  c.start=startDate;
  addEvent(id,'accepted','Application accepted',`${programme} · ${classroom} · ${fmtDate(startDate)}`);
  ui().admissionsStageFilter='Accepted';
  ui().admissionsTab='overview';
  closeOverlay();
};

mpsAdmissionFeeQuote = function(c){
  const placement=c.application?.acceptedPlacement||{};
  const policy=mpsAdmissionsTenantPolicy();
  const programme=placement.programme||c.acceptedProgramme||(c.service?.includes('Upper Class')?'Upper Class':'Baby Class');
  const classroom=placement.classroom||placement.className||c.acceptedClassroom||c.acceptedClass||programme;
  const acceptedAt=placement.acceptedAt||mpsAdmissionToday();
  const amount=Number(policy.admissionFeeByProgramme?.[programme]||0);
  const days=Number(policy.admissionFeeDeadlineDays||7);
  return {programme,classroom,acceptedAt,amount,currency:policy.currency||'LKR',deadlineDays:days,due:mpsAdmissionDatePlusDays(acceptedAt,days)};
};

function mpsAdmissionFeeInvoice(c){return c?.fee?.invoiceId?db.billing?.invoices?.[c.fee.invoiceId]||null:null}
function mpsAdmissionFeePayments(c){
  if(!c)return [];
  return Object.values(db.billing?.payments||{}).filter(p=>p.admissionsCaseId===c.id);
}
function mpsAdmissionVerifiedAmount(c){
  const inv=mpsAdmissionFeeInvoice(c);
  return inv?invoicePaid(inv):0;
}
mpsAdmissionFeeGateSatisfied=function(f){
  if(!f)return false;
  if(f.waived)return true;
  const c=Object.values(db.admissions).find(x=>x.fee===f||x.fee?.invoiceId===f.invoiceId);
  const inv=c?mpsAdmissionFeeInvoice(c):null;
  return !!inv && invoiceOutstanding(inv)===0;
};
mpsAdmissionEffectiveFeeStatus=function(f){
  if(!f)return '';
  if(mpsAdmissionFeeGateSatisfied(f))return 'satisfied';
  if(f.due && f.due<mpsAdmissionToday())return 'overdue';
  return 'pending';
};
feeOutstanding=function(f){
  if(!f||f.waived)return 0;
  const c=Object.values(db.admissions).find(x=>x.fee===f||x.fee?.invoiceId===f.invoiceId);
  const inv=c?mpsAdmissionFeeInvoice(c):null;
  return inv?invoiceOutstanding(inv):Math.max(0,Number(f.amount||0)-Number(f.verified||0));
};

function mpsEnsureAcceptedPlacementSeedFacts(){
  Object.values(db.admissions).forEach(c=>{
    if(c?.application?.status!=='accepted'||c.application.acceptedPlacement)return;
    const event=[...(c.events||[])].reverse().find(e=>e.type==='accepted');
    const eventClass=String(event?.detail||'').split(' · ')[0].trim();
    const knownClass=c.enrolment?.className||(/^(Baby Class|Upper Class)$/.test(eventClass)?eventClass:'')||(c.service?.includes('Upper Class')?'Upper Class':'Baby Class');
    const acceptedAt=c.fee?.due?mpsAdmissionDatePlusDays(c.fee.due,-7):mpsAdmissionToday();
    c.application.acceptedPlacement={programme:knownClass,classroom:knownClass,className:knownClass,startDate:c.enrolment?.start||c.start,acceptedAt,acceptedBy:'Prototype seed'};
    c.acceptedProgramme=knownClass;c.acceptedClassroom=knownClass;c.acceptedClass=knownClass;
  });
}
mpsEnsureAcceptedPlacementSeedFacts();

function mpsEnsureAdmissionFeeBillingTruth(){
  db.billing=db.billing||{invoices:{},payments:{},pendingCharges:{}};
  db.billing.invoices=db.billing.invoices||{};db.billing.payments=db.billing.payments||{};
  Object.values(db.admissions).forEach(c=>{
    if(!c?.fee)return;
    if(c.fee.invoiceId&&db.billing.invoices[c.fee.invoiceId])return;
    const iid=`admfee_${c.id}`;
    const issued=c.application?.acceptedPlacement?.acceptedAt||c.fee.policySnapshot?.acceptedAt||null;
    const inv={id:iid,number:`ADM-${String(c.id).toUpperCase()}`,childId:c.id,childName:c.childName,status:'issued',issued,due:c.fee.due,lines:[{id:`line_${iid}`,description:'Admission fee',amount:Number(c.fee.amount||0)}],allocations:[],history:[{at:'Prototype seed',text:'Admission-fee financial truth migrated into Billing for audit integrity'}],evidence:{},category:'admission_fee',admissionsCaseId:c.id};
    db.billing.invoices[iid]=inv;c.fee.invoiceId=iid;c.fee.currency=c.fee.currency||'LKR';
    const oldPending=Array.isArray(c.fee.pending)?[...c.fee.pending]:[];
    oldPending.forEach((p,i)=>{
      const pid=p.id||`admp_seed_${c.id}_${i}`;
      db.billing.payments[pid]={...p,id:pid,childId:c.id,childName:c.childName,admissionsCaseId:c.id,invoiceId:iid,paymentDate:p.paymentDate||'',recordedBy:p.recordedBy||'Prototype seed',recordedAt:p.recordedAt||null};
      if(p.status==='verified')inv.allocations.push({paymentId:pid,amount:Number(p.amount||0)});
    });
    const already=inv.allocations.reduce((sum,a)=>sum+Number(a.amount||0),0);
    const legacyVerified=Math.max(0,Number(c.fee.verified||0)-already);
    if(legacyVerified){
      const pid=`admp_seed_verified_${c.id}`;
      db.billing.payments[pid]={id:pid,childId:c.id,childName:c.childName,admissionsCaseId:c.id,invoiceId:iid,amount:legacyVerified,paymentDate:'',method:'Recorded payment',reference:'Legacy prototype seed',status:'verified',verification:'Legacy prototype seed',verifiedBy:'Prototype seed',verifiedAt:null};
      inv.allocations.push({paymentId:pid,amount:legacyVerified});
    }
    c.fee.pending=undefined;c.fee.verified=undefined;
    if(c.fee.waived){inv.admissionFeeWaived=true;inv.waiver=c.fee.waiver||{reason:'Legacy prototype waiver'}}
  });
  save();
}
mpsEnsureAdmissionFeeBillingTruth();

const _mpsAuditAdmissionDerivedFinal=admissionDerived;
admissionDerived=function(c){
  if(c?.fee&&!c.closed&&!c.enrolment&&c.application?.status==='accepted'){
    const st=mpsAdmissionEffectiveFeeStatus(c.fee);
    if(st==='overdue')return {stage:'Accepted',status:'Fee overdue',statusTone:'red',next:'Decide overdue fee action'};
    if(st==='satisfied')return {stage:'Accepted',status:'Fee satisfied',statusTone:'green',next:'Create enrolment'};
    return {stage:'Accepted',status:'Admission fee',statusTone:'amber',next:'Billing verification / settlement'};
  }
  return _mpsAuditAdmissionDerivedFinal(c);
};

issueAdmissionFee=function(id){
  if(!has('Accounts')){alert('Admission-fee invoicing is handled in Billing by authorised finance staff.');return}
  const c=db.admissions[id];
  if(!c||c.application?.status!=='accepted'||c.fee)return closeOverlay();
  const q=mpsAdmissionFeeQuote(c);
  if(!q.amount){alert('No admission-fee policy is configured for the accepted programme.');return}
  const iid=`admfee_${c.id}_${Date.now()}`;
  db.billing.invoices[iid]={id:iid,number:`ADM-${String(Date.now()).slice(-6)}`,childId:c.id,childName:c.childName,status:'issued',issued:mpsAdmissionToday(),due:q.due,lines:[{id:`line_${iid}`,description:'Admission fee',amount:q.amount}],allocations:[],history:[{at:mpsAdmissionToday(),text:'Admission-fee invoice issued from accepted application'}],evidence:{},category:'admission_fee',admissionsCaseId:c.id};
  c.fee={invoiceId:iid,amount:q.amount,currency:q.currency,due:q.due,status:'pending',waived:false,policySnapshot:{programme:q.programme,classroom:q.classroom,amount:q.amount,currency:q.currency,deadlineDays:q.deadlineDays,acceptedAt:q.acceptedAt}};
  addEvent(id,'fee_invoice','Admission-fee invoice issued',`${q.currency} ${Number(q.amount).toLocaleString('en-LK')} · due ${fmtDate(q.due)} · Billing`);
  closeOverlay();
};

createEnrolment = function(id){
  const c=db.admissions[id];
  if(!c?.fee||!mpsAdmissionFeeGateSatisfied(c.fee)){alert('Fee gate is not satisfied.');return}
  const placement=c.application?.acceptedPlacement||{};
  const programme=placement.programme||c.acceptedProgramme||(c.service?.includes('Upper')?'Upper Class':'Baby Class');
  const classroom=placement.classroom||placement.className||c.acceptedClassroom||c.acceptedClass||programme;
  const start=placement.startDate||c.start;
  c.enrolment={status:'active',programme,className:classroom,service:c.service,start};
  c.onboarding=seedOnboarding(c.childName,c.childName.split(' ')[0],c.dob,c.guardian,c.phone,{});
  addEvent(id,'enrolled','Enrolment created',`${programme} · ${classroom} · ${fmtDate(start)}`);
  ui().admissionsTab='prestart';
  closeOverlay();
};
// Finance ownership: Billing owns the admission-fee invoice, payment entry, verification and allocation.
recordAdmissionPayment=function(caseId){
  if(!has('Accounts')){alert('Admission-fee payment entry is handled in Billing by authorised finance staff.');return}
  const c=db.admissions[caseId],inv=mpsAdmissionFeeInvoice(c);if(!c?.fee||!inv)return;
  const amount=Math.max(0,Number(val('adm_record_amount')||0));if(!amount){alert('Enter the payment amount.');return}
  const max=invoiceOutstanding(inv);if(amount>max){alert('The recorded amount cannot exceed the current admission-fee outstanding balance.');return}
  const file=byId('adm_record_evidence')?.files?.[0]||null;
  const evidence=file?{name:file.name,type:file.type||'',size:file.size||0}:null;
  const pid='admp_'+Date.now();
  db.billing.payments[pid]={id:pid,childId:c.id,childName:c.childName,admissionsCaseId:c.id,invoiceId:inv.id,amount,paymentDate:val('adm_record_date')||mpsAdmissionToday(),method:val('adm_record_method'),reference:val('adm_record_reference')||'No reference',evidence,status:'pending',recordedBy:mpsAdmissionActor(),recordedAt:new Date().toISOString()};
  addEvent(caseId,'fee_payment_recorded','Admission-fee payment recorded',`${money(amount)} · Pending Verification${evidence?` · Evidence attached: ${evidence.name}`:''}`);
  closeOverlay();
};
verifyAdmissionPayment=function(caseId,paymentId){
  if(!has('Accounts')){alert('Admission-fee payment verification is handled in Billing by authorised finance staff.');return}
  const c=db.admissions[caseId],inv=mpsAdmissionFeeInvoice(c),p=db.billing?.payments?.[paymentId];
  if(!c||!inv||!p||p.admissionsCaseId!==caseId||p.status==='verified')return closeOverlay();
  const alloc=Math.min(Number(p.amount||0),invoiceOutstanding(inv));
  if(!alloc){alert('This admission-fee invoice has no outstanding balance.');return}
  p.status='verified';p.verification=val('adm_verification');p.verifiedBy=mpsAdmissionActor();p.verifiedAt=new Date().toISOString();p.allocationInvoiceId=inv.id;
  inv.allocations.push({paymentId:p.id,amount:alloc});
  p.receipt=`REC-${inv.number}-${p.id}.pdf`;
  inv.history.push({at:mpsAdmissionToday(),text:`Payment verified and allocated · ${money(alloc)} · ${p.verification} · ${p.verifiedBy}`});
  addEvent(caseId,'fee_verified','Admission-fee payment verified',`${money(alloc)} · ${p.verification} · ${p.verifiedBy}`);
  closeOverlay();
};
recordOverdueDecision=function(id){
  const c=db.admissions[id];if(!c?.fee)return;
  const action=val('overdue_action'),reason=val('overdue_reason').trim();if(!reason){alert('Enter the reason for this authorised decision.');return}
  const actor=mpsAdmissionActor(),at=new Date().toISOString(),inv=mpsAdmissionFeeInvoice(c);
  if(action==='Extend deadline'){
    const newDue=val('overdue_date');if(!newDue){alert('Choose the new deadline.');return}
    c.fee.due=newDue;if(inv)inv.due=newDue;addEvent(id,'fee_extended','Admission-fee deadline extended',`${fmtDate(newDue)} · ${reason} · ${actor}`);
  }else if(action==='Waive fee with reason'){
    if(!has('Head Teacher')){alert('Only the Head Teacher/Owner waiver authority may waive the admission fee.');return}
    c.fee.waived=true;c.fee.waiver={reason,by:actor,at};if(inv){inv.admissionFeeWaived=true;inv.waiver={reason,by:actor,at};inv.history.push({at:mpsAdmissionToday(),text:`Admission fee waived for enrolment gate · ${reason} · ${actor}`})}
    addEvent(id,'fee_waived','Admission fee waived',`${reason} · ${actor}`);
  }else{
    c.closed={type:'Released',reason,releasedAt:at,releasedBy:actor};addEvent(id,'released','Accepted place released',`${reason} · ${actor}`);
  }
  closeOverlay();
};

const _mpsAuditInvoiceOutstanding=invoiceOutstanding;
invoiceOutstanding=function(inv){
  if(inv?.category==='admission_fee'&&inv?.admissionFeeWaived)return 0;
  return _mpsAuditInvoiceOutstanding(inv);
};
const _mpsAuditInvoiceStatus=invoiceStatus;
invoiceStatus=function(inv){
  if(inv?.category==='admission_fee'&&inv?.admissionFeeWaived)return {text:'Waived',tone:'green'};
  return _mpsAuditInvoiceStatus(inv);
};

admissionPayments = function(c){
  if(!c.fee)return `<div class="card"><h3>Admission fee</h3><p>No fee invoice exists yet. Billing creates the admission-fee invoice after Acceptance.</p></div>`;
  const f=c.fee,inv=mpsAdmissionFeeInvoice(c),payments=mpsAdmissionFeePayments(c),outstanding=feeOutstanding(f),effective=mpsAdmissionEffectiveFeeStatus(f),satisfied=mpsAdmissionFeeGateSatisfied(f),verified=mpsAdmissionVerifiedAmount(c);
  const rows=payments.length?payments.map(p=>{
    const audit=p.status==='verified'?`${fmtDate(p.paymentDate)} · ${esc(p.reference||'No reference')} · ${esc(p.verification||'Verified')} · ${esc(p.verifiedBy||'Authorised finance')}`:`${fmtDate(p.paymentDate)} · ${esc(p.reference||'No reference')} · awaiting Finance verification`;
    return `<div class="child-row"><strong>${money(p.amount)} · ${esc(p.method)}</strong><span>${badge(p.status,p.status==='pending'?'amber':'green')}</span><span class="hide-mobile">${audit}</span><span>${p.status==='pending'?badge('Billing action','blue'):'✓'}</span></div>`;
  }).join(''):'<div class="empty">No payment recorded yet.</div>';
  return `<div class="grid"><div class="span-8 card"><div class="card-header"><div class="grow"><h3>Admission fee</h3><p>Billing owns the invoice, payment verification and allocation. Admissions consumes the gate result.</p></div>${badge(effective==='overdue'?'Overdue':satisfied?'Satisfied':'In progress',effective==='overdue'?'red':satisfied?'green':'amber')}</div>${inv?kv('Invoice',esc(inv.number)):''}<div class="money">${money(f.amount)}</div>${kv('Due date',fmtDate(f.due))}${kv('Verified payment',money(verified))}${f.waived?kv('Waiver',`${badge('Authorised','green')} ${esc(f.waiver?.reason||'Reason recorded')}`):''}${kv('Outstanding',money(outstanding))}<div class="section-title">Payment activity</div>${rows}</div><div class="span-4 card"><h3>Controls</h3><p>Accepted is not Enrolled. Full verified settlement or an authorised waiver is required before conversion.</p>${notice('Cash/bank-transfer payment entry and real-source verification are Finance actions in Billing. Admissions does not verify money.','info')}${effective==='overdue'?`<div style="margin-top:8px">${btn('Overdue action',`openModal('overdue-fee',{caseId:'${c.id}'})`,'secondary')}</div>`:''}</div></div>`;
};

function mpsAdmissionFeeBillingRows(){
  return Object.values(db.admissions).filter(c=>c?.application?.status==='accepted'&&!c?.enrolment&&!c?.closed).map(c=>{
    if(!c.fee){
      const q=mpsAdmissionFeeQuote(c);
      return `<div class="card flat" style="margin-bottom:10px" data-admission-fee-case="${esc(c.id)}"><div class="card-header"><div class="grow"><h3>${esc(c.childName)} · admission fee</h3><p>Accepted · ${esc(q.programme)} · ${esc(q.classroom)} · due ${fmtDate(q.due)} once issued under the accepted fee policy</p></div>${badge('Invoice required','blue')}</div>${btn('Create admission-fee invoice',`openModal('issue-admission-fee',{caseId:'${c.id}'})`,'primary','sm')}</div>`;
    }
    const f=c.fee,inv=mpsAdmissionFeeInvoice(c),payments=mpsAdmissionFeePayments(c),effective=mpsAdmissionEffectiveFeeStatus(f),out=feeOutstanding(f);
    const paymentRows=payments.map(p=>`<div class="child-row"><strong>${money(p.amount)} · ${esc(p.method)}</strong><span>${badge(p.status,p.status==='pending'?'amber':'green')}</span><span class="hide-mobile">${fmtDate(p.paymentDate)} · ${esc(p.reference||'No reference')}</span><span>${p.status==='pending'?btn('Verify',`openModal('verify-admission-payment',{caseId:'${c.id}',paymentId:'${p.id}'})`,'primary','sm'):'✓'}</span></div>`).join('');
    return `<div class="card flat" style="margin-bottom:10px" data-admission-fee-case="${esc(c.id)}"><div class="card-header"><div class="grow"><h3>${esc(c.childName)} · admission fee</h3><p>${inv?esc(inv.number)+' · ':''}${money(f.amount)} · due ${fmtDate(f.due)} · ${money(out)} outstanding</p></div>${badge(effective==='overdue'?'Overdue':mpsAdmissionFeeGateSatisfied(f)?'Satisfied':'In progress',effective==='overdue'?'red':mpsAdmissionFeeGateSatisfied(f)?'green':'amber')}</div>${paymentRows||'<div class="empty">No payment recorded yet.</div>'}${!mpsAdmissionFeeGateSatisfied(f)?`<div style="margin-top:10px">${btn('Record payment',`openModal('record-admission-payment',{caseId:'${c.id}'})`,'primary','sm')}</div>`:''}</div>`;
  }).join('')||'<div class="empty">No active admission-fee finance work.</div>';
}

const _mpsAuditAcceptedOverview=admissionOverview;
admissionOverview=function(c){
  if(admissionDisplayStage(c)==='Accepted'&&!c.fee){
    const p=c.application?.acceptedPlacement||{};
    const action=actionCard('Accepted · awaiting Billing invoice','The accepted placement is frozen. Authorised Finance creates the admission-fee invoice in Billing before this family enters the Admission Fee stage.',badge('Billing action required','blue'));
    const details=`<div class="card" style="margin-top:12px"><h3>Admission details</h3>${kv('Lead source',`${esc(c.source||'—')} ${prov('Recorded in Admissions','staff')}`)}${kv('Reason for choice',esc(c.reason||'—'))}${kv('Application',applicationSummary(c))}${kv('Accepted programme',esc(p.programme||c.acceptedProgramme||'—'))}${kv('Accepted classroom',esc(p.classroom||p.className||c.acceptedClassroom||'—'))}${kv('Accepted start',fmtDate(p.startDate||c.start))}</div>`;
    const management=mpsEstablishedDuplicateEligible(c)?`<div class="card" style="margin-top:12px"><div class="card-header"><div class="grow"><h3>Record management</h3><p>Use only when staff later confirms this Admissions record is a duplicate of another record.</p></div>${btn('Mark as duplicate',`mpsOpenEstablishedDuplicate('${c.id}')`,'secondary','sm')}</div></div>`:'';
    return `${action}${details}${management}`;
  }
  return _mpsAuditAcceptedOverview(c);
};

const _mpsAuditRenderBilling=renderBilling;
renderBilling=function(){
  const original=_mpsAuditRenderBilling();
  const marker='</div></main>';
  const section=`<div class="section-title">Admission-fee finance</div><div data-admission-fee-finance>${mpsAdmissionFeeBillingRows()}</div>`;
  return original.includes(marker)?original.replace(marker,`${section}</div></main>`):original;
};

const _mpsAuditTodayActions2=todayActions;
todayActions=function(){
  const a=_mpsAuditTodayActions2();
  if(has('Accounts')){
    const pending=Object.values(db.billing?.payments||{}).find(p=>p.admissionsCaseId&&p.status==='pending');
    if(pending)a.unshift({sev:'amber',icon:'₨',title:`${pending.childName||db.admissions[pending.admissionsCaseId]?.childName||'Admission'} · admission-fee payment awaiting verification`,sub:'Billing real-source verification required',go:"setRoute('billing')"});
    else {
      const accepted=Object.values(db.admissions).find(c=>c.application?.status==='accepted'&&!c.fee&&!c.enrolment&&!c.closed);
      if(accepted)a.unshift({sev:'blue',icon:'₨',title:`${accepted.childName} · admission-fee invoice required`,sub:'Billing invoice action required after Acceptance',go:"setRoute('billing')"});
    }
  }
  return a;
};

// Duplicate comparison highlights only fields that actually match the current enquiry.
const _mpsAuditDrawerViewFinal=drawerView;
drawerView=function(d){
  if(d?.name!=='duplicate-existing-record')return _mpsAuditDrawerViewFinal(d);
  const p=ui().pendingEnquiry||{},c=duplicateCandidateRecord(d.data?.id),candidates=duplicateCandidateRecords();
  if(!c)return drawer('Compare possible match','The candidate is no longer available.',notice('Return to the possible-match overview and review the current candidates.','warn'),btn('Back to all matches','returnToDuplicateReview()','secondary'));
  const index=Math.max(0,candidates.findIndex(x=>x.id===c.id)),clearedCount=duplicateClearedCount(),cleared=duplicateCandidateCleared(c.id);
  const childMatch=mpsNormName(p.childName)&&mpsNormName(p.childName)===mpsNormName(c.childName);
  const dobMatch=!!p.dob&&p.dob===c.dob;
  const guardianMatch=mpsNormName(p.guardian)&&mpsNormName(p.guardian)===mpsNormName(c.guardian);
  const phoneMatch=mpsNormPhone(p.phone)&&mpsNormPhone(p.phone)===mpsNormPhone(c.phone);
  const mark=x=>x?` ${badge('Match','amber')}`:'';
  return drawer('Compare possible match',`Match ${index+1} of ${candidates.length} · ${clearedCount} cleared${cleared?' · already cleared as different':''}`,`${notice(`MPS flagged this candidate because of ${esc(c.matchReason)}. Only actual matching fields are marked below; a family-contact match may still belong to a sibling or another child. Staff makes the identity decision.`,'info')}<div class="grid" style="margin-top:14px"><div class="span-6 card flat"><div class="eyebrow">New enquiry</div><h3>${esc(p.childName||'New child')}</h3>${kv('Date of birth',fmtDate(p.dob))}${kv('Guardian',esc(p.guardian||'—'))}${kv('Phone',esc(p.phone||'—'))}${kv('Interested service',esc(p.service||'—'))}</div><div class="span-6 card flat"><div class="eyebrow">Selected existing record</div><h3>${esc(c.childName)}${mark(childMatch)}</h3>${kv('Date of birth',`${fmtDate(c.dob)}${mark(dobMatch)}`)}${kv('Guardian',`${esc(c.guardian)}${mark(guardianMatch)}`)}${kv('Phone',`${esc(c.phone)}${mark(phoneMatch)}`)}${kv('Current status',esc(c.status))}${kv('Programme / class',esc(c.className))}</div></div>${notice('If this is the same child/person, close the incoming enquiry as a duplicate against this record. If it is not the same child/person, clear this candidate; MPS then moves to the next unresolved match.','warn')}`,`${btn('Back to all matches','returnToDuplicateReview()','secondary')}${btn('Not the same child/person',`clearDuplicateCandidate('${c.id}')`,'secondary')}${btn('Close new enquiry as duplicate',`closePendingAsDuplicate('${c.id}')`,'danger')}`);
};

mpsEnsureApplicationLink=function(c){
  if(!c.application.link){
    const created=mpsAdmissionToday();
    const token=`${String(c.id).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
    c.application.link={token,url:`https://apply.mps.example/a/${token}`,recipientName:c.guardian,recipientPhone:c.phone,createdAt:created,expiresAt:null,expiryPolicy:'Time-limited; production duration not yet specified',status:'Generated',sentAt:null,submittedAt:null};
    save();
  }
  return c.application.link;
};

sendApplication=function(id){
  const c=db.admissions[id];if(!c)return;
  if(c?.tour?.status==='completed'&&c.tour.outcome!=='Family wants to proceed'){
    alert('Resolve the Visit follow-up before sending the Application.');return;
  }
  if(!c.application.draft)c.application.draft={childName:c.childName,dob:c.dob,guardian:c.guardian,phone:c.phone,service:c.service,start:c.start,note:''};
  const link=mpsEnsureApplicationLink(c);link.status='Sent';link.sentAt=new Date().toISOString();c.application.status='sent';
  addEvent(id,'application_sent','Application link sent','Registered WhatsApp · time-limited secure link · Sent');
  closeOverlay();
};

mpsEnsureOnboardingLink=function(c){
  const o=ensureOnboarding(c.id);
  if(!o.link){
    const created=mpsAdmissionToday();
    const token=`ONB-${String(c.id).toUpperCase()}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
    o.link={token,url:`https://onboard.mps.example/n/${token}`,recipientName:c.guardian,recipientPhone:c.phone,createdAt:created,expiresAt:null,expiryPolicy:'Time-limited; production duration not yet specified',status:'Generated',sentAt:null,submittedAt:null};
    save();
  }
  return o.link;
};

const _mpsAuditPrestart2=admissionPrestart;
admissionPrestart=function(c){
  let html=_mpsAuditPrestart2(c);
  const l=c?.onboarding?.link;
  if(l){
    const exactExpiry=kv('Expires',fmtDate(l.expiresAt));
    html=html.replace(exactExpiry,kv('Expiry','Time-limited · production duration not yet specified'));
  }
  return html;
};

const _mpsAuditModalView2=modalView;
modalView=function(m){
  const n=m?.name,d=m?.data||{};
  if(n==='accept-application'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView2(m);
    const policy=mpsAdmissionsTenantPolicy();
    const programmes=Object.keys(policy.programmes||{});const current=c.service?.includes('Upper')?'Upper Class':'Baby Class';
    const classrooms=[...new Set(programmes.flatMap(x=>policy.programmes?.[x]?.classrooms||[]))];
    return modal('Accept application','Acceptance freezes the approved placement facts for conversion.',`${selectField('Accepted programme',programmes,current,'accept_programme')}${selectField('Accepted classroom',classrooms,current,'accept_classroom')}${field('Accepted start date',c.start,'date',false,'accept_start')}${notice('Programme, classroom and start date are stored as separate placement facts. These labels come from tenant prototype configuration; MPS does not treat them as universal product rules.','info')}${notice('Accepted is not Enrolled. The admission-fee gate must be satisfied or waived before conversion.','warn')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Accept',`acceptApplication('${c.id}')`,'primary')}`);
  }
  if(n==='send-application'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView2(m);
    const link=mpsEnsureApplicationLink(c);
    return modal('Send secure application','No parent account required.',`${kv('Recipient',`${esc(link.recipientName)} · ${esc(link.recipientPhone)}`)}${kv('Expiry','Time-limited · production duration not yet specified')}${kv('Prefill','Enquiry + Visit information')}${field('Secure link',link.url,'text',true)}${textArea('Prepared WhatsApp message',`Hi ${c.guardian.split(' ')[0]}, thank you for visiting ${ORG}. Please use this secure link to review the details we already have and submit ${c.childName.split(' ')[0]}’s application.`,'app_message')}${notice('Manual WhatsApp records Sent only — not Delivered or Read.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Copy & mark Sent',`sendApplication('${c.id}')`,'primary')}`);
  }
  if(n==='issue-admission-fee'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView2(m);
    const q=mpsAdmissionFeeQuote(c);
    return modal('Create admission-fee invoice','Acceptance is already recorded. Billing policy is snapshotted for this accepted application.',`${kv('Family',esc(c.childName))}${kv('Accepted programme',esc(q.programme))}${kv('Accepted classroom',esc(q.classroom))}${kv('Amount',`${q.currency} ${Number(q.amount).toLocaleString('en-LK')}`)}${kv('Accepted',fmtDate(q.acceptedAt))}${kv('Due date',`${fmtDate(q.due)} · ${q.deadlineDays} days from acceptance`)}${notice('The amount shown is tenant-configured prototype data, not a universal MPS fee.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create invoice',`issueAdmissionFee('${c.id}')`,'primary')}`);
  }
  if(n==='create-enrolment'){
    const c=db.admissions[d.caseId];if(!c)return _mpsAuditModalView2(m);
    const p=c.application?.acceptedPlacement||{};
    return modal('Create enrolment','Reuse the accepted Application; do not create the family again.',`${kv('Child',esc(c.childName))}${kv('Accepted programme',esc(p.programme||c.acceptedProgramme||'—'))}${kv('Accepted classroom',esc(p.classroom||p.className||c.acceptedClassroom||'—'))}${kv('Start date',fmtDate(p.startDate||c.start))}${kv('Admission-fee gate',mpsAdmissionFeeGateSatisfied(c.fee)?'Satisfied':'Not satisfied')}${notice('Enrolment reuses the accepted placement and the existing Admissions history.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create enrolment',`createEnrolment('${c.id}')`,'primary')}`);
  }
  return _mpsAuditModalView2(m);
};
// Admissions audit QA correction — Billing-owned admission-fee verification reads the Billing payment record.
// This keeps the finance ownership introduced by the audit and removes the stale Admissions fee.pending lookup.
const _mpsAuditModalViewFinanceVerification = modalView;
modalView = function(m){
  const n=m?.name,d=m?.data||{};
  if(n==='verify-admission-payment'){
    const c=db.admissions[d.caseId];
    const p=db.billing?.payments?.[d.paymentId];
    const inv=c?mpsAdmissionFeeInvoice(c):null;
    if(!c||!p||!inv||p.admissionsCaseId!==c.id||p.invoiceId!==inv.id){
      return _mpsAuditModalViewFinanceVerification(m);
    }
    return modal(
      'Verify admission-fee payment',
      'Check the real finance source before marking Verified.',
      `${kv('Family',esc(c.childName))}${kv('Payment date',fmtDate(p.paymentDate))}${kv('Method',esc(p.method))}${kv('Amount',money(p.amount))}${kv('Reference',esc(p.reference||'No reference'))}${selectField('Verification method',['Bank app/account checked','Bank statement checked','Cash received','Payment-provider confirmation','Other authorised verification'],'Bank app/account checked','adm_verification')}${notice('The optional attachment is supporting evidence, not the control. The authorised real-source check is.','info')}`,
      `${btn('Cancel','closeOverlay()','secondary')}${btn('Verify payment',`verifyAdmissionPayment('${c.id}','${p.id}')`,'primary')}`
    );
  }
  return _mpsAuditModalViewFinanceVerification(m);
};
// Owner Issues 022–023 — preserve the original Enquiry message as persistent Admissions context.
function mpsEnquiryMessageProvenance(c){
  const source=String(c?.source||'').trim();
  return source==='Website'
    ? {label:'Parent submitted',kind:'parent'}
    : {label:'Staff recorded',kind:'staff'};
}

function mpsEnquiryMessageRow(c){
  const message=String(c?.message||'').trim();
  if(!message) return '';
  const provenance=mpsEnquiryMessageProvenance(c);
  return kv('Enquiry message',`<span data-enquiry-message style="white-space:pre-wrap">${esc(message)}</span> ${prov(provenance.label,provenance.kind)}`);
}

const _mpsIssue023AdmissionOverview=admissionOverview;
admissionOverview=function(c){
  const html=_mpsIssue023AdmissionOverview(c);
  const messageRow=mpsEnquiryMessageRow(c);
  if(!messageRow) return html;

  const leadSourceRow=kv('Lead source',`${esc(c.source||'—')} ${prov('Recorded in Admissions','staff')}`);
  if(html.includes(leadSourceRow)) return html.replace(leadSourceRow,`${leadSourceRow}${messageRow}`);

  const detailsHeading='<h3>Admission details</h3>';
  if(html.includes(detailsHeading)) return html.replace(detailsHeading,`${detailsHeading}${messageRow}`);

  return html;
};

// Owner Issue 021 / BQ-088 refinement — staff-managed Visit scheduling may happen in the same contact interaction.
function toggleEnquiryVisitFields(){
  const outcome = val('enq_contact_outcome');
  const scheduleNow = val('enq_schedule_visit') === 'Yes';
  const visit = byId('enq_visit_wrap');
  if(visit) visit.style.display = outcome === 'Wants to continue' && scheduleNow ? '' : 'none';
}

const _mpsIssue021ToggleEnquiryContactFields = toggleEnquiryContactFields;
toggleEnquiryContactFields = function(){
  _mpsIssue021ToggleEnquiryContactFields();
  const outcome = val('enq_contact_outcome');
  const schedule = byId('enq_schedule_wrap');
  if(schedule) schedule.style.display = outcome === 'Wants to continue' ? '' : 'none';
  toggleEnquiryVisitFields();
};

recordEnquiryContactOutcome = function(id){
  const c = db.admissions[id];
  if(!c) return;
  const method = val('enq_contact_method');
  const outcome = val('enq_contact_outcome');
  const note = val('enq_contact_note').trim();
  const detailNote = note ? ` · ${note}` : '';

  if(outcome === 'Wants to continue'){
    const scheduleNow = val('enq_schedule_visit') === 'Yes';
    let visitDate = '', visitTime = '', visitContact = '';
    if(scheduleNow){
      visitDate = val('enq_visit_date');
      visitTime = val('enq_visit_time');
      visitContact = val('enq_visit_contact').trim() || c.guardian;
      if(!visitDate || !visitTime){ alert('Choose the Visit date and time.'); return; }
    }

    c.followUp = null;
    c.events.push(ev('contact_attempt','Parent contact',`${method} · Wants to continue${detailNote}`));
    c.events.push(ev('qualified','Confirmed Interest',`Real positive signal received via ${method}${detailNote}`));
    if(scheduleNow){
      c.tour = {status:'scheduled',date:visitDate,time:visitTime,outcome:null,contact:visitContact};
      c.events.push(ev('tour_scheduled','Visit scheduled',`${fmtDate(visitDate)} · ${visitTime} · ${visitContact}`));
    }
    save();
    closeOverlay();
    return;
  }

  if(outcome === 'Could not reach parent'){
    const followUpDate = val('enq_followup_date');
    if(!followUpDate){ alert('Choose the next follow-up date.'); return; }
    c.followUp = {date:followUpDate,reason:'Could not contact',method,note};
    c.events.push(ev('contact_attempt','Parent contact attempt',`${method} · Could not reach parent · follow up ${fmtDate(followUpDate)}${detailNote}`));
    save();
    closeOverlay();
    return;
  }

  if(outcome === 'Not proceeding'){
    const reason = val('enq_lost_reason') || 'No longer interested';
    c.followUp = null;
    c.closed = {type:'Closed',reason};
    c.events.push(ev('non_conversion','Admissions journey closed',`${reason} · ${method}${detailNote}`));
    save();
    closeOverlay();
  }
};

const _mpsIssue021ModalView = modalView;
modalView = function(m){
  const n = m?.name, d = m?.data || {};
  if(n === 'qualify-lead'){
    const c = db.admissions[d.caseId];
    if(!c) return _mpsIssue021ModalView(m);
    const existingMethod = ['Phone call','WhatsApp','Email','In person'].includes(c.followUp?.method) ? c.followUp.method : 'Phone call';
    const existingNote = c.followUp?.note || '';
    const body = `${kv('Family',`${c.guardian} / ${c.childName}`)}${notice('Record what actually happened. Confirmed Interest requires a real positive signal; the enquiry itself is not enough.','info')}${selectField('Contact method',['Phone call','WhatsApp','Email','In person'],existingMethod,'enq_contact_method')}${selectField('Outcome',['Wants to continue','Could not reach parent','Not proceeding'],'Wants to continue','enq_contact_outcome','toggleEnquiryContactFields()')}${textArea('Factual note',existingNote,'enq_contact_note')}<div id="enq_schedule_wrap">${selectField('Schedule visit now?',['No','Yes'],'No','enq_schedule_visit','toggleEnquiryVisitFields()')}</div><div id="enq_visit_wrap" style="display:none">${field('Visit date','','date',false,'enq_visit_date')}${field('Visit time','','time',false,'enq_visit_time')}${field('Attending contact',c.guardian,'text',false,'enq_visit_contact')}</div><div id="enq_followup_wrap" style="display:none">${field('Next follow-up date',c.followUp?.date||'','date',false,'enq_followup_date')}</div><div id="enq_lost_wrap" style="display:none">${selectField('Non-conversion reason',lostReasons,'No longer interested','enq_lost_reason')}</div>${notice('A visit and ability to pay are not required to confirm interest. If a convenient Visit time is agreed during this conversation, staff can schedule it here now. Otherwise, schedule it later from Confirmed Interest.','info')}`;
    return modal(c.followUp?.date ? 'Record follow-up outcome' : 'Record contact outcome','Keep the Admissions record aligned with the real conversation.',body,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`recordEnquiryContactOutcome('${c.id}')`,'primary')}`);
  }
  return _mpsIssue021ModalView(m);
};

// Owner Issue 024 / BQ-092 — validate and normalise contact data at the input boundary.
// Prototype tenant configuration seam. Production resolves this from tenant/site configuration.
const MPS_TENANT_CONFIG = Object.freeze({ phoneCountryDefault: 'LK' });

function mpsPhoneCountryOptions(){
  return [
    {code:'LK',label:'Sri Lanka (+94)',dial:'+94'},
    {code:'IN',label:'India (+91)',dial:'+91'},
    {code:'GB',label:'United Kingdom (+44)',dial:'+44'},
    {code:'AU',label:'Australia (+61)',dial:'+61'},
    {code:'AE',label:'United Arab Emirates (+971)',dial:'+971'},
    {code:'US',label:'United States (+1)',dial:'+1'}
  ];
}
function mpsDefaultPhoneCountry(){
  const configured=String(MPS_TENANT_CONFIG.phoneCountryDefault||'').toUpperCase();
  return mpsPhoneCountryOptions().some(x=>x.code===configured) ? configured : 'LK';
}
function mpsPhoneInput(raw){
  return String(raw||'').replace(/[^+()\-\s0-9]/g,'');
}
function mpsNormalisePhone(raw,countryCode=mpsDefaultPhoneCountry()){
  const country=mpsPhoneCountryOptions().find(x=>x.code===countryCode)||mpsPhoneCountryOptions().find(x=>x.code===mpsDefaultPhoneCountry());
  const trimmed=String(raw||'').trim();
  if(!trimmed) return {ok:false,error:'Enter a phone number.'};
  if(!/^[+()\-\s0-9]+$/.test(trimmed)) return {ok:false,error:'Use only numbers, spaces, +, parentheses or hyphens.'};
  let digits=trimmed.replace(/\D/g,'');
  if(trimmed.startsWith('+')){
    if(digits.length<8 || digits.length>15) return {ok:false,error:'Enter a valid international phone number.'};
    return {ok:true,value:`+${digits}`};
  }
  const dialDigits=country.dial.replace(/\D/g,'');
  if(country.code==='LK'){
    if(digits.startsWith('94')) digits=digits.slice(2);
    if(digits.startsWith('0')) digits=digits.slice(1);
    if(digits.length!==9) return {ok:false,error:'Enter a valid Sri Lankan phone number, for example 077 123 4567.'};
  } else {
    if(digits.startsWith('0')) digits=digits.slice(1);
    if(digits.length<6 || digits.length>12) return {ok:false,error:'Enter a valid phone number for the selected country.'};
  }
  return {ok:true,value:`+${dialDigits}${digits}`};
}
function mpsNormaliseEmail(raw){
  const email=String(raw||'').trim().toLowerCase();
  if(!email) return {ok:true,value:''};
  if(email.length>254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return {ok:false,error:'Enter a valid email address or leave it blank.'};
  return {ok:true,value:email};
}

const _mpsBq092ModalView=modalView;
modalView=function(m){
  const n=m?.name;
  if(n==='new-enquiry'){
    const p=ui().pendingEnquiry||{};
    const countries=mpsPhoneCountryOptions();
    const defaultCountry=p.phoneCountry||mpsDefaultPhoneCountry();
    const countrySelect=`<div class="field"><label>Phone country</label><select id="ne_phone_country">${countries.map(x=>`<option value="${x.code}" ${x.code===defaultCountry?'selected':''}>${esc(x.label)}</option>`).join('')}</select></div>`;
    const phoneField=`<div class="field"><label>Phone</label><input id="ne_phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(p.phone||'070 000 0000')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
    const serviceOptions=['Baby Class','Upper Class','Baby Class + Standard Daycare','Baby Class + Extended Daycare','Upper Class + Standard Daycare','Upper Class + Extended Daycare'];
    const body=`${selectField('How did you hear about us?',sources,p.source||'Facebook','ne_source')}<div class="form-grid">${field('Parent / contact name',p.guardian||'New Parent','text',false,'ne_guardian')}${countrySelect}${phoneField}${field('Email (optional)',p.email||'','email',false,'ne_email')}${field('Child name',p.childName||'New Child','text',false,'ne_child')}${field('Child DOB',p.dob||'2024-06-01','date',false,'ne_dob')}${field('Desired start',p.start||'2027-01-19','date',false,'ne_start')}${selectField('Interested service',serviceOptions,p.service||'Baby Class','ne_service')}</div>${textArea('Message',p.message||'Interested in 2027 admissions.','ne_message')}${notice('Phone is checked for reliable matching. Email is optional.','info')}`;
    return modal('New enquiry','',body,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save enquiry','mpsSaveValidatedEnquiry()','primary')}`);
  }
  return _mpsBq092ModalView(m);
};

function mpsSaveValidatedEnquiry(){
  const childName=val('ne_child').trim(), guardian=val('ne_guardian').trim(), dob=val('ne_dob'), start=val('ne_start');
  if(!childName){ alert('Enter the child name.'); return; }
  if(!guardian){ alert('Enter the parent / guardian name.'); return; }
  if(!dob){ alert('Enter the child date of birth.'); return; }
  if(!start){ alert('Enter the desired start date.'); return; }
  const phone=mpsNormalisePhone(val('ne_phone'),val('ne_phone_country'));
  if(!phone.ok){ alert(phone.error); return; }
  const email=mpsNormaliseEmail(val('ne_email'));
  if(!email.ok){ alert(email.error); return; }
  const p={childName,dob,guardian,phone:phone.value,phoneCountry:val('ne_phone_country')||mpsDefaultPhoneCountry(),email:email.value,start,service:val('ne_service'),source:val('ne_source'),message:val('ne_message').trim(),duplicateReviews:{}};
  ui().pendingEnquiry=p;
  const candidates=(typeof duplicateCandidateRecords==='function')?duplicateCandidateRecords():[];
  if(candidates.length){ ui().modal={name:'duplicate-candidate',data:null}; save(); render(); return; }
  mpsCommitValidatedEnquiry(p);
}
function mpsCommitValidatedEnquiry(p){
  const id='case_'+Date.now();
  db.admissions[id]={id,childName:p.childName,dob:p.dob,guardian:p.guardian,phone:p.phone,phoneCountry:p.phoneCountry||mpsDefaultPhoneCountry(),email:p.email||'',start:p.start,service:p.service,source:p.source,reason:'Other',message:p.message||'',events:[ev('enquiry','Enquiry created',p.source)],tour:null,application:{status:'not_sent',draft:null,snapshot:null},fee:null,enrolment:null,onboarding:null,closed:null};
  ui().admissionsCase=id; ui().admissionsTab='overview'; ui().pendingEnquiry=null; ui().modal=null; ui().drawer=null; save(); render();
}
commitNewEnquiry=function(mode){
  const p=ui().pendingEnquiry;
  if(!p) return closeOverlay();
  const candidates=(typeof duplicateCandidateRecords==='function')?duplicateCandidateRecords():[];
  if(candidates.length && typeof duplicateAllCandidatesCleared==='function' && !duplicateAllCandidatesCleared()){
    alert('Review and clear every possible match before proceeding as a new record.'); return;
  }
  mpsCommitValidatedEnquiry(p);
};
const _mpsBq092AdmissionOverview=admissionOverview;
admissionOverview=function(c){
  const html=_mpsBq092AdmissionOverview(c);
  if(!c.email) return html;
  const leadSourceRow=kv('Lead source',`${esc(c.source||'—')} ${prov('Recorded in Admissions','staff')}`);
  const emailRow=kv('Email',`${esc(c.email)} ${prov(c.source==='Website'?'Parent submitted':'Staff recorded',c.source==='Website'?'parent':'staff')}`);
  return html.includes(leadSourceRow) ? html.replace(leadSourceRow,`${leadSourceRow}${emailRow}`) : html;
};

// Operational Simplicity — approved wording and transition feedback; no business-rule change.
// Apply the wording at the rendered Admissions overview boundary. These exact
// strings occur only on the Enquiry follow-up card, so no stage helper is
// needed here (avoids coupling the copy patch to unrelated rendering state).
const _mpsFollowUpAdmissionOverview = admissionOverview;
admissionOverview=function(c){
  const html=_mpsFollowUpAdmissionOverview(c);
  return html
    .replace('Next action · Contact parent','Next action · Follow up with parent')
    .replace('Next action · Follow up parent','Next action · Follow up with parent')
    .replace('Record contact outcome','Update enquiry')
    .replace('Record follow-up outcome','Update enquiry');
};

// When a positive Enquiry outcome also schedules a Visit, the business history
// correctly records Confirmed Interest first and Visit second. Make that rapid
// two-step progression explicit to staff so the UI does not appear to skip a
// stage. The confirmation is deliberately transient and is not persisted as a
// business fact; the underlying Admissions events remain the audit history.
let mpsAdmissionsTransitionNotice=null;
const _mpsFollowUpRenderAdmissions=renderAdmissions;
renderAdmissions=function(){
  const html=_mpsFollowUpRenderAdmissions();
  const transition=mpsAdmissionsTransitionNotice;
  if(!transition) return html;
  mpsAdmissionsTransitionNotice=null;
  const message=transition.kind==='visit'
    ? `<strong>Interest confirmed.</strong> Visit scheduled for ${fmtDate(transition.date)} · ${esc(transition.time)}. The case is now in Visit because that is the next active step.`
    : `<strong>Interest confirmed.</strong> No Visit is scheduled yet. The case is now in Confirmed Interest; arrange the Visit when the family is ready.`;
  return html.replace('<div class="content">',`<div class="content">${notice(message,'ok')}`);
};

const _mpsFollowUpRecordEnquiryContactOutcome=recordEnquiryContactOutcome;
recordEnquiryContactOutcome=function(id){
  const c=db.admissions[id];
  if(!c) return _mpsFollowUpRecordEnquiryContactOutcome(id);

  const outcome=val('enq_contact_outcome');
  const scheduleNow=outcome==='Wants to continue' && val('enq_schedule_visit')==='Yes';
  const visitDate=scheduleNow?val('enq_visit_date'):'';
  const visitTime=scheduleNow?val('enq_visit_time'):'';
  const beforeQualified=(c.events||[]).filter(e=>e.type==='qualified').length;

  _mpsFollowUpRecordEnquiryContactOutcome(id);

  // If validation stopped the underlying save, no Confirmed Interest event was
  // added and there is no transition to explain.
  const afterQualified=(c.events||[]).filter(e=>e.type==='qualified').length;
  if(outcome!=='Wants to continue' || afterQualified<=beforeQualified) return;

  ui().admissionsCase=id;
  ui().admissionsTab='overview';
  if(scheduleNow && c.tour?.status==='scheduled' && c.tour.date===visitDate && c.tour.time===visitTime){
    ui().admissionsStageFilter='Visit';
    mpsAdmissionsTransitionNotice={kind:'visit',date:c.tour.date,time:c.tour.time};
  }else if(!scheduleNow && !c.tour){
    ui().admissionsStageFilter='Confirmed Interest';
    mpsAdmissionsTransitionNotice={kind:'confirmed'};
  }else{
    return;
  }
  save();
  render();
};

// The modular prototype renders once before later patch modules have finished
// loading. On a normal page refresh that left the early/base Admissions markup
// in the DOM until another action caused a render; Reset happened to trigger
// that later render, which is why Reset showed the approved labels but Refresh
// showed the old ones. Re-render once after the final module is installed so
// the initial page always uses the complete current implementation.
render();
// Operational Simplicity — reuse the factual note already captured during Enquiry follow-up.
// This is presentation/data-reuse only: the Timeline remains the complete contact history,
// while Admission details shows the latest non-blank staff factual note for quick context.

function mpsLatestContactNoteFromEvents(c){
  const events=[...(c?.events||[])].reverse();
  for(const e of events){
    const parts=String(e?.detail||'').split(' · ').map(x=>x.trim()).filter(Boolean);
    if(e?.type==='contact_attempt' && parts[1]==='Wants to continue' && parts.length>2){
      return parts.slice(2).join(' · ');
    }
    if(e?.type==='contact_attempt' && parts[1]==='Could not reach parent' && parts.length>3){
      return parts.slice(3).join(' · ');
    }
    if(e?.type==='non_conversion' && parts.length>2){
      return parts.slice(2).join(' · ');
    }
    if(e?.type==='qualified' && /^Real positive signal received via /.test(parts[0]||'') && parts.length>1){
      return parts.slice(1).join(' · ');
    }
  }
  return '';
}

function mpsLatestContactNoteText(c){
  return String(c?.latestContactNote?.text||'').trim() || mpsLatestContactNoteFromEvents(c);
}

function mpsLatestContactNoteRow(c){
  const note=mpsLatestContactNoteText(c);
  if(!note) return '';
  return kv('Latest contact note',`<span data-latest-contact-note style="white-space:pre-wrap">${esc(note)}</span> ${prov('Staff recorded','staff')}`);
}

const _mpsLatestNoteAdmissionOverview=admissionOverview;
admissionOverview=function(c){
  const html=_mpsLatestNoteAdmissionOverview(c);
  const noteRow=mpsLatestContactNoteRow(c);
  if(!noteRow || html.includes('data-latest-contact-note')) return html;

  const messageRow=typeof mpsEnquiryMessageRow==='function' ? mpsEnquiryMessageRow(c) : '';
  if(messageRow && html.includes(messageRow)) return html.replace(messageRow,`${messageRow}${noteRow}`);

  const leadSourceRow=kv('Lead source',`${esc(c.source||'—')} ${prov('Recorded in Admissions','staff')}`);
  if(html.includes(leadSourceRow)) return html.replace(leadSourceRow,`${leadSourceRow}${noteRow}`);

  const detailsHeading='<h3>Admission details</h3>';
  if(html.includes(detailsHeading)) return html.replace(detailsHeading,`${detailsHeading}${noteRow}`);

  return html;
};

const _mpsLatestNoteRecordEnquiryContactOutcome=recordEnquiryContactOutcome;
recordEnquiryContactOutcome=function(id){
  const c=db.admissions[id];
  if(!c) return _mpsLatestNoteRecordEnquiryContactOutcome(id);

  const note=val('enq_contact_note').trim();
  const method=val('enq_contact_method');
  const outcome=val('enq_contact_outcome');
  const beforeEvents=c.events?.length||0;
  const previous=Object.prototype.hasOwnProperty.call(c,'latestContactNote') ? c.latestContactNote : undefined;
  const hadPrevious=Object.prototype.hasOwnProperty.call(c,'latestContactNote');

  // Put the note on the case before the established save/render path runs, so
  // the same render that shows Confirmed Interest / Visit also shows the note.
  if(note){
    c.latestContactNote={
      text:note,
      method,
      outcome,
      recordedAt:new Date().toISOString(),
      recordedBy:mpsAdmissionActor()
    };
  }

  _mpsLatestNoteRecordEnquiryContactOutcome(id);

  // Validation can stop the underlying action before anything is saved. Roll
  // back the provisional note in memory in that case; no localStorage write occurred.
  if(note && (c.events?.length||0)<=beforeEvents){
    if(hadPrevious) c.latestContactNote=previous;
    else delete c.latestContactNote;
  }
};

// part-038 performs an early final render for refresh correctness; this module is
// later in the build order, so render once more to install the completed context view.
render();
// BQ-093 — Calendar operational simplicity and audience-aware staff entries.
// Staff see ordinary calendar language; source ownership, operating status and
// permission boundaries remain enforced underneath.

function calendarConfiguredClassNames(){
  const names=new Set();
  Object.values(db.attendance||{}).forEach(x=>{if(x?.className) names.add(String(x.className).trim())});
  Object.values(db.admissions||{}).forEach(c=>{if(c?.enrolment?.className) names.add(String(c.enrolment.className).trim())});
  Object.values(db.staff?.accounts||{}).forEach(a=>{
    if(Array.isArray(a?.classNames)) a.classNames.forEach(x=>{if(x) names.add(String(x).trim())});
  });
  return Array.from(names).filter(Boolean).sort((a,b)=>a.localeCompare(b));
}

function calendarViewerClassNames(){
  const configured=new Set(calendarConfiguredClassNames());
  const p=currentPersona();
  const a=db.staff?.accounts?.[p.id];
  const values=[];
  if(Array.isArray(p?.classNames)) values.push(...p.classNames);
  if(Array.isArray(a?.classNames)) values.push(...a.classNames);
  if(p?.scope) values.push(p.scope);
  if(a?.scope) values.push(a.scope);
  return [...new Set(values.filter(x=>configured.has(x)))];
}

function calendarEntryVisibilityLabel(e){
  if(!e?.visibility){
    if(e?.scope==='Whole preschool') return 'All staff';
    return e?.scope||'Calendar entry';
  }
  if(e.visibility==='only_me') return 'Only me';
  if(e.visibility==='head_teacher') return 'Head Teacher + me';
  if(e.visibility==='all_staff') return 'All staff';
  if(e.visibility==='classes'){
    const xs=Array.isArray(e.classNames)?e.classNames:[];
    return xs.length?`Classes · ${xs.join(' · ')}`:'Classes';
  }
  return 'Calendar entry';
}

calendarEventVisibleToViewer=function(e){
  if(!e?.visibility){
    if(e?.scope==='Whole preschool') return true;
    if(has('Head Teacher')||has('System Administration')) return true;
    return currentPersona().scope===e?.scope;
  }
  if(e.visibility==='all_staff') return true;
  if(currentPersona().id===e.createdById) return true;
  if(e.visibility==='head_teacher') return has('Head Teacher');
  if(e.visibility==='classes'){
    if(has('Head Teacher')) return true;
    const selected=new Set(Array.isArray(e.classNames)?e.classNames:[]);
    return calendarViewerClassNames().some(x=>selected.has(x));
  }
  return false;
};

calendarEventsOn=function(date){
  return Object.values(db.calendar?.events||{})
    .filter(e=>e.date===date&&calendarEventVisibleToViewer(e))
    .sort((a,b)=>(a.time||'99:99').localeCompare(b.time||'99:99')||String(a.title||'').localeCompare(String(b.title||'')));
};

calendarUpcomingVisibleEvents=function(monthKey){
  return Object.values(db.calendar?.events||{})
    .filter(calendarEventVisibleToViewer)
    .filter(e=>e.date?.slice(0,7)===monthKey)
    .sort((a,b)=>a.date.localeCompare(b.date)||(a.time||'99:99').localeCompare(b.time||'99:99')||String(a.title||'').localeCompare(String(b.title||'')));
};

function calendarEntryClassesPanel(){
  const classes=calendarConfiguredClassNames();
  if(!classes.length) return notice('No configured classes are available for class visibility. Choose another audience or configure classes first.','warn');
  return `<div id="evt_classes_panel" style="display:block;margin-top:8px"><div class="field"><label>Classes</label><label class="check-row"><input id="evt_all_classes" type="checkbox" onchange="calendarSelectAllEntryClasses(this.checked)"> Select all classes</label>${classes.map(c=>`<label class="check-row"><input data-calendar-entry-class type="checkbox" value="${esc(c)}" onchange="calendarSyncAllEntryClasses()"> ${esc(c)}</label>`).join('')}</div><div class="sub">The Head Teacher and the person creating the entry are included automatically.</div></div>`;
}

function calendarEntryVisibilityChanged(){
  const panel=byId('evt_classes_panel');
  if(panel) panel.style.display=val('evt_visibility')==='Classes…'?'block':'none';
}
function calendarSelectAllEntryClasses(checkedValue){
  document.querySelectorAll('[data-calendar-entry-class]').forEach(x=>{x.checked=!!checkedValue});
}
function calendarSyncAllEntryClasses(){
  const boxes=Array.from(document.querySelectorAll('[data-calendar-entry-class]'));
  const all=byId('evt_all_classes');
  if(all) all.checked=!!boxes.length&&boxes.every(x=>x.checked);
}
function calendarEntryModal(data={}){
  const date=data.date||TODAY;
  return modal('Add calendar entry','Add the appointment or item people need to know about.',`${field('Title','','text',false,'evt_title')}<div class="form-grid">${field('Date',date,'date',false,'evt_date')}${field('Time (optional)','','time',false,'evt_time')}</div>${selectField('Who should see this?',['Only me','Head Teacher + me','Classes…','All staff'],'Classes…','evt_visibility','calendarEntryVisibilityChanged()')}${calendarEntryClassesPanel()}${textArea('Optional note','','evt_note')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save calendar entry','saveCalendarEntry()','primary')}`);
}

const _mpsCalendarEntryModalView=modalView;
modalView=function(m){
  if(m?.name==='calendar-event') return calendarEntryModal(m.data||{});
  return _mpsCalendarEntryModalView(m);
};

function saveCalendarEntry(){
  const title=val('evt_title').trim();
  const date=val('evt_date');
  if(!title){alert('Enter a title for this calendar entry.');return}
  if(!date){alert('Choose a date for this calendar entry.');return}
  const choice=val('evt_visibility');
  const map={'Only me':'only_me','Head Teacher + me':'head_teacher','Classes…':'classes','All staff':'all_staff'};
  const visibility=map[choice]||'only_me';
  const classNames=visibility==='classes'?Array.from(document.querySelectorAll('[data-calendar-entry-class]:checked')).map(x=>x.value):[];
  if(visibility==='classes'&&!classNames.length){alert('Select at least one class, or choose another audience.');return}
  const p=currentPersona();
  const id=`evt_${Date.now()}`;
  const e={
    id,
    title,
    date,
    time:val('evt_time'),
    note:val('evt_note').trim(),
    visibility,
    classNames,
    createdById:p.id,
    createdByName:p.name,
    createdAt:new Date().toISOString()
  };
  e.scope=calendarEntryVisibilityLabel(e);
  db.calendar.events[id]=e;
  closeOverlay();
}
saveCalendarEvent=saveCalendarEntry;

function calendarTimedRowsForDay(events,tours){
  const rows=[];
  events.forEach(e=>rows.push({
    time:e.time||'',
    sortTime:e.time||'99:99',
    sortTitle:e.title||'',
    html:`<div class="calendar-detail-row"><span>${badge('Calendar entry','blue')}</span><div><strong>${e.time?`${esc(e.time)} · `:''}${esc(e.title)}</strong><div class="sub">${esc(calendarEntryVisibilityLabel(e))}${e.note?` · ${esc(e.note)}`:''}</div></div></div>`
  }));
  tours.forEach(t=>rows.push({
    time:t.time||'',
    sortTime:t.time||'99:99',
    sortTitle:t.childName||'',
    html:`<div class="calendar-detail-row"><span>${badge('Admissions visit','blue')}</span><div><strong>${t.time?`${esc(t.time)} · `:''}${esc(t.childName)}</strong><div class="sub">${esc(t.guardian)}</div><div style="margin-top:6px">${btn('Open Admissions',`openAdmissionsCaseFromCalendar('${t.caseId}')`,'secondary','sm')}</div></div></div>`
  }));
  return rows.sort((a,b)=>a.sortTime.localeCompare(b.sortTime)||a.sortTitle.localeCompare(b.sortTitle)).map(x=>x.html).join('');
}

calendarDayModal=function(date){
  const op=operatingStatusForDate(date);
  const events=calendarEventsOn(date);
  const holidays=holidayReferencesOn(date);
  const tours=calendarAdmissionsToursOn(date);
  const birthdays=birthdaysOn(date);
  const guardianBirthdays=calendarGuardianBirthdaysOn(date);
  const record=calendarRecordForDate(date);
  const active=calendarActiveExceptionOn(date);
  const canManage=calendarCanManage();
  const scheduled=calendarTimedRowsForDay(events,tours);
  const other=[
    ...holidays.map(h=>`<div class="calendar-detail-row"><span>${badge('Holiday','purple')}</span><div><strong>${esc(h.name)}</strong><div class="sub">${esc(h.category||'Public holiday')}</div></div></div>`),
    ...birthdays.map(c=>`<div class="calendar-detail-row"><span>${badge('Child birthday','green')}</span><div><strong>🎂 ${esc(c.name)}</strong></div></div>`),
    ...guardianBirthdays.map(g=>`<div class="calendar-detail-row"><span>${badge('Guardian birthday','green')}</span><div><strong>🎂 ${esc(g.name)}</strong><div class="sub">${esc(g.childName)} · ${esc(g.relationship)}</div></div></div>`)
  ].join('');
  const context=scheduled+other;
  let history='';
  if(canManage&&record?.history?.length){
    history=`<div class="section-title" style="margin-top:16px">Operating amendment history</div>${record.history.slice().reverse().map(h=>`<div class="calendar-history"><strong>${esc(calendarNormaliseType(h.type))}</strong><span>${esc(h.reason||'No reason recorded')} · ${esc(h.by||'Staff')}</span></div>`).join('')}`;
  }
  const body=`${kv('Date',calendarDateLabel(date))}<div class="calendar-operating-summary">${badge(op.text,op.tone)}</div>${canManage&&active?.reason?`<div class="notice info"><strong>Current change reason:</strong> ${esc(active.reason)}</div>`:''}<div class="section-title" style="margin-top:16px">On this day</div>${context||'<div class="empty">No other calendar items for this date.</div>'}${history}`;
  const editData=record?`{id:'${record.id}',date:'${date}'}`:`{date:'${date}'}`;
  const foot=`${btn('Close','closeOverlay()','secondary')}${btn('Add calendar entry',`openModal('calendar-event',{date:'${date}'})`,'secondary')}${canManage?btn('Change operating status',`openModal('calendar-exception',${editData})`,'primary'):''}`;
  return modal(calendarDateLabel(date),'',body,foot);
};

const _mpsCalendarEntryRenderCalendar=renderCalendar;
renderCalendar=function(){
  let html=_mpsCalendarEntryRenderCalendar();
  html=html
    .replaceAll('Add event','Add calendar entry')
    .replaceAll('Staff-created events','Calendar entries')
    .replaceAll('No visible staff-created events this month.','No calendar entries this month.')
    .replaceAll('Events remain separate from operating status.','Calendar entries do not change operating status.')
    .replace('<span><i class="legend-dot event"></i> Event</span>','<span><i class="legend-dot event"></i> Calendar entry</span>');

  if(!html.includes('Add calendar entry')){
    const noActions='<div class="page-head"><div class="left"><div class="eyebrow">Organisation calendar</div><h2>Calendar</h2><p>A familiar month calendar for operating days and important preschool context. What you can see still follows your existing permissions.</p></div></div>';
    const withActions=`<div class="page-head"><div class="left"><div class="eyebrow">Organisation calendar</div><h2>Calendar</h2><p>A familiar month calendar for operating days and important preschool context. What you can see still follows your existing permissions.</p></div><div class="page-actions">${btn('Add calendar entry',`openModal('calendar-event',{date:'${TODAY}'})`,'primary')}</div></div>`;
    html=html.replace(noActions,withActions);
  }
  return html;
};

calendarPlanningContext=function(){
  const start=ui().lessonWeek;
  const end=isoAddDays(start,4);
  const lessonClass=className();
  const items=[];
  Object.values(db.calendar?.events||{}).forEach(e=>{
    if(!e?.date||e.date<start||e.date>end) return;
    let relevant=false;
    if(!e.visibility) relevant=e.scope==='Whole preschool'||e.scope===lessonClass;
    else if(e.visibility==='all_staff') relevant=true;
    else if(e.visibility==='classes') relevant=(e.classNames||[]).includes(lessonClass);
    if(!relevant||!calendarEventVisibleToViewer(e)) return;
    items.push({date:e.date,title:e.title,detail:`${e.time?`${e.time} · `:''}${calendarEntryVisibilityLabel(e)}${e.note?` · ${e.note}`:''}`,kind:'Event'});
  });
  calendarChildren().filter(c=>!c.className||c.className===lessonClass).forEach(c=>{const d=`${start.slice(0,4)}-${c.dob.slice(5)}`;if(d>=start&&d<=end)items.push({date:d,title:`${c.name} birthday`,detail:'Birthday',kind:'Birthday'})});
  holidayReferencesOnRange(start,end).forEach(h=>items.push({date:h.date,title:h.name,detail:'Sri Lankan holiday reference',kind:'Holiday reference'}));
  return items.sort((a,b)=>a.date.localeCompare(b.date)||String(a.detail||'').localeCompare(String(b.detail||'')));
};

// Re-render after the final Calendar module is installed so refresh and Reset use
// the same audience-aware Calendar behaviour.
render();
// Operational Simplicity — cross-product plain-language audit.
// Presentation only: keep approved states, permissions, provenance and business logic
// unchanged underneath, but describe them in the language preschool staff need.

const MPS_PLAIN_LANGUAGE_REPLACEMENTS = [
  // Shell / general
  ['Configured tenant · MPS product','Preschool workspace'],
  ['No record in your authorised prototype scope matched that search.','No matching record found.'],

  // Today
  ['Your MPS view contains approved public-safe assets only.','Only photos approved for public use are shown here.'],
  ['No approved MarketingAssets are currently available. Private child photos, nominations, profiles, Health and assessment data are not exposed to this persona.','No photos are currently approved for public use. Private classroom photos and child records stay private.'],
  ['Finance-only action view. Child Health, teaching and private media are outside this persona.','Here are the billing tasks that need attention today.'],
  ['Real-source check','Check bank/cash record'],
  ['Organisation access and recovery work only; operational child data is not automatically exposed.','Manage staff accounts, access and account recovery.'],
  ['Personal identities','Staff accounts'],
  ['Historical attribution retained','Past actions kept'],
  ['Access governance','Staff access'],
  ['Permission bundles are additive. One person uses one account; responsibilities do not require role switching.','Each staff member uses one account. Give them access to the areas they need.'],
  ['Ordinary staff → System Administrator reset. Last/only administrator → configured secure recovery; platform break-glass requires ownership/control verification.','A System Administrator can reset staff passwords. If the last administrator is locked out, use the secure account-recovery process.'],
  ['One personalised operational view built from the permission bundles on this account.','What needs your attention today.'],
  ['Physical-presence truth','Currently checked in'],
  ['Source-backed work','Items needing action'],
  ['Assigned teaching scope','Your classes'],
  ['Planning context only. It does not change operating-day truth or invent a lesson.','This calendar entry does not change opening hours or create a lesson plan.'],
  ['derived from DOB. Calm context, not an alert.','birthday'],
  ['Persistent safety context','Important care note'],
  ['Visible where care requires it. It is not a permanent red Today alert.','Shown here because it matters while caring for this child.'],

  // Admissions / application / fees
  ['A persistent family workspace. Staff do the next real job and leave; MPS keeps the case state.','One family record, the current stage, and the next thing to do.'],
  ['The parent submission is now part of this same case.','The parent has submitted the application. Review it together with the admissions notes.'],
  ['Parent submission stays on the same admissions record with provenance.','The parent application is shown together with information already recorded during admissions.'],
  ['No fee gate exists yet for this case. It is created only after Acceptance.','No admission-fee invoice has been created yet.'],
  ['Issued financial history is stable; verified money is allocated to the gate.','Payments appear here after Billing verifies them.'],
  ['Accepted is not Enrolled. Full verified settlement or an authorised waiver is required before conversion.','The child can be enrolled after the fee is fully verified or an authorised waiver is recorded.'],
  ['Fee gate satisfied','Admission fee complete'],
  ['Create the enrolment from the accepted Application; do not retype the family.','The admission fee is complete. Create the enrolment using the details already on file.'],
  ['Billing owns the invoice, payment verification and allocation. Admissions consumes the gate result.','Billing records and verifies the payment. Admissions shows the latest payment status.'],
  ['Cash/bank-transfer payment entry and real-source verification are Finance actions in Billing. Admissions does not verify money.','Record and verify cash or bank-transfer payments in Billing.'],
  ['Accepted · awaiting Billing invoice','Accepted · admission-fee invoice needed'],
  ['The accepted placement is frozen. Authorised Finance creates the admission-fee invoice in Billing before this family enters the Admission Fee stage.','The accepted class and start date are confirmed. Billing now needs to create the admission-fee invoice.'],
  ['Billing action required','Billing needs to act'],
  ['Billing real-source verification required','Payment needs checking in Billing'],
  ['Billing invoice action required after Acceptance','Create the admission-fee invoice in Billing'],
  ['Acceptance freezes the approved placement facts for conversion.','Confirm the class and start date for this child.'],
  ['Programme, classroom and start date are stored as separate placement facts. These labels come from tenant prototype configuration; MPS does not treat them as universal product rules.','Check the programme, class and start date before accepting.'],
  ['Accepted is not Enrolled. The admission-fee gate must be satisfied or waived before conversion.','Acceptance does not enrol the child. Complete or waive the admission fee before enrolment.'],
  ['Time-limited · production duration not yet specified','Time-limited link'],
  ['Billing policy is snapshotted for this accepted application.','Review the admission-fee amount and due date before creating the invoice.'],
  ['The amount shown is tenant-configured prototype data, not a universal MPS fee.','This is the preschool’s configured admission fee.'],
  ['Reuse the accepted Application; do not create the family again.','The family details are already here.'],
  ['Enrolment reuses the accepted placement and the existing Admissions history.','MPS will use the accepted class, start date and family details already recorded.'],
  ['Admission-fee gate','Admission fee'],
  ['Check the real finance source before marking Verified.','Check the payment against the bank, cash record or other authorised source before marking it verified.'],
  ['The optional attachment is supporting evidence, not the control. The authorised real-source check is.','An attachment can help, but verify the payment against the actual bank, cash or payment record.'],
  ['Admissions prefill','Already on file'],
  ['MPS reused','Already on file'],
  ['Recorded in Admissions','Staff recorded'],
  ['Admissions history','From admissions'],
  ['Staff recorded at Visit','Staff note'],
  ['Case timeline','Admissions history'],
  ['Derived only from this family’s actual recorded events.','A history of what has happened with this family.'],
  ['Record what actually happened. Confirmed Interest requires a real positive signal; the enquiry itself is not enough.','Record the parent’s response. Move to Confirmed Interest only when they say they want to continue.'],
  ['A visit and ability to pay are not required to confirm interest. If a convenient Visit time is agreed during this conversation, staff can schedule it here now. Otherwise, schedule it later from Confirmed Interest.','If the family wants to continue, you can schedule a Visit now or arrange it later.'],
  ['Keep the Admissions record aligned with the real conversation.','Record what the parent said.'],
  ['Non-conversion reason','Reason for closing enquiry'],
  ['The case is now in Visit because that is the next active step.','Next step: Visit.'],
  ['The case is now in Confirmed Interest. The Visit can be arranged later.','Next step: arrange the Visit.'],
  ['Only actual matching fields are marked below; a family-contact match may still belong to a sibling or another child. Staff makes the identity decision.','Matching fields are highlighted. A shared family phone can belong to siblings, so staff should confirm whether this is the same child.'],

  // Pre-start / parent forms
  ['Safety readiness and practical checklist completion are shown separately.','Safety information and practical items are tracked separately.'],
  ['Safety / operational readiness','Safety readiness'],
  ['guardian/pickup/Health/communication controls','guardian, pickup, Health and communication details'],
  ['non-critical documents/starter items','documents and starter items'],
  ['Parent input → authorised review','Waiting for staff review'],
  ['Ready to Start for safety/operations.','Safety information is ready.'],
  ['Any remaining non-critical checklist items stay visible and do not masquerade as 100% complete.','Any remaining practical items stay visible.'],
  ['Do not rely on parent-submitted Health as authoritative until an authorised review confirms it.','A staff member must review parent-submitted Health information before it becomes the current Health record.'],
  ['This is deliberately a lean Application. Pickup, Health, documents and consent belong to post-enrolment onboarding.','This application only asks for the information needed for the admissions decision. Pickup, Health, documents and consent will be collected later if the child enrols.'],
  ['Admissions information is prefilled. Complete or confirm the remaining pre-start family details.','We have filled in information already provided during admissions. Complete or confirm the remaining family details.'],
  ['This submission is parent-provided evidence. It does not overwrite authoritative Health until staff review.','A staff member must review this Health information before it becomes the current Health record.'],

  // Lessons / teaching / progress
  ['Curriculum engine','Teaching'],
  ['Plan from structured framework context, reuse activities, teach from Today, and let evidence flow downstream.','Plan the week, choose activities, teach, and record what happened.'],
  ['Planning context','This week'],
  ['Official source','Curriculum'],
  ['Official Teacher Guide structure','From Teacher Guide'],
  ['MPS teacher-friendly summary','Teaching focus'],
  ['MPS keeps official source structure, teacher-friendly summaries and preschool-created activity/adaptation text visually distinct.','Your preschool’s own notes stay separate from the curriculum wording.'],
  ['Mapped official learning area','Learning area'],
  [' · mapped to ',' · Learning area: '],
  ['Teacher adaptation','Your notes'],
  ['Open / adapt','Open / adjust'],
  ['materials and curriculum context already carried forward.','everything needed for this activity is here.'],
  ['Official learning area','Learning area'],
  ['Official structure','From curriculum'],
  ['Teacher-friendly MPS summary','Teaching focus'],
  ['Record delivery','How did it go?'],
  ['Meaningful evidence','Record learning if useful'],
  ['Why this is lightweight','Keep it quick'],
  ['No lesson transcription. No compulsory full-class scoring. One delivery outcome, then only evidence worth keeping.','Record what happened, then add an observation or assessment only when it is useful.'],
  ['See evidence chain','View progress notes'],
  ['>Evidence & progress<','>Progress<'],
  ['Teaching evidence','Observations'],
  ['These records are already organised by child and mapped learning-area context.','MPS groups these records by child and learning area.'],
  ['Report candidate','Can use in report'],
  ['Internal evidence','Staff only'],
  ['Activity and learning-area context are inherited from Today.','Activity and learning area are filled in for you.'],
  ['Prefilled','Filled in'],
  ['The local 1–5 rubric is not presented as an official NIE scoring scale.','Use the preschool’s 1–5 scale. It is not an NIE score.'],
  ['Save evidence','Save assessment'],
  ['Official learning-area mapping, MPS summary and teacher adaptation remain distinct.','Review the learning area, teaching focus and your own notes.'],
  ['This adaptation is local teacher/preschool text; it is not represented as official source wording.','Your changes are saved as your preschool’s notes, separate from the curriculum wording.'],
  ['MPS-provided activity','Suggested activity'],
  ['Preschool-created activity','Preschool activity'],

  // Attendance / pickup
  ['Physical presence','Today'],
  ['One attendance truth: real arrival, safe handover, then checkout. Corrections preserve history.','Check children in when they arrive and out after a safe handover. Corrections keep the original record.'],
  ['Truthful absence','Marked absent'],
  ['Amaya has one audited arrival-time correction.','Amaya has one corrected arrival time.'],
  ['Rapid arrival','Quick check-in'],
  ['Fast convenience; each selected child still becomes physically present individually.','Check in several children quickly.'],
  ['Routine authorised collector · manual human check','Authorised collector checked by staff'],
  ['Human verification remains the safety decision.','Confirm the collector before handing over the child.'],
  ['Authorised corrections preserve the original fact and amendment.','The original time and the correction are both kept in the history.'],

  // Daycare
  ['Bookings create the roster; physical attendance remains the single presence truth.','Today’s daycare list comes from bookings. Attendance shows who is actually here.'],
  ['Derived roster','Booked children'],
  ['Configured capacity','Capacity'],
  ['Operational review','Needs review'],
  ['Add ad-hoc booking','Add booking'],
  ['Authorise booking','Add booking'],
  ['The system detects; the authorised reviewer approves or waives with reason before Billing.','MPS has flagged the late pickup. Review it before any charge is sent to Billing.'],

  // Health
  ['Only the safety context needed for your role is visible here; authoritative Health review and medication authorisation stay restricted.','You can see the care information needed for your role. Health updates and medication authorisations are restricted.'],
  ['Relevant care context','Care information'],
  ['Parent updates and authoritative Health editing are not available to this permission set.','Your role cannot review parent Health updates or change Health records.'],
  ['One authoritative Health truth; parent input, medication authority and incidents remain separate workflows.','Review Health updates, medication authorisations and incidents in one place.'],
  ['Authoritative profile example','Current Health record'],
  ['Confirmed family / authorised review','Confirmed by staff'],
  ['Accounts and Social Media personas cannot access this route.',''],
  ['Do not overwrite authoritative Health until reviewed.','Review the parent’s update before changing the current Health record.'],
  ['Confirm into Health','Update Health record'],

  // Billing
  ['Clear invoice states, verified payments and immutable issued history — without becoming a full accounting system.','Create invoices, verify payments, and follow up outstanding balances.'],
  ['Real-source verification','Check bank/cash record'],
  ['Pending operational charges','Charges to add'],
  ['No approved operational charge awaiting Accounts review.','No charges waiting to be added.'],
  ['Issued snapshot / draft lines, payments and audit history.','Invoice details, payments and history.'],
  ['<div class="section-title">Lines</div>','<div class="section-title">Invoice items</div>'],
  ['Evidence & history','Invoice & payment history'],
  ['Issued PDF snapshot','Issued invoice PDF'],
  ['Issued lines are immutable. Correct with an auditable void/replacement path.','An issued invoice can’t be edited. Void and replace it if a correction is needed.'],
  ['Every payment is checked against the real source before allocation.','Check the payment against the bank, cash or payment record before marking it verified.'],
  ['Verification method','How was it checked?'],
  ['Verify & allocate','Verify payment'],
  ['Receipt history retained','Receipt saved'],
  ['Payment verified and allocated','Payment verified and applied to invoice'],
  ['immutable PDF snapshot created','PDF copy saved'],

  // Reports
  ['MPS starts from real evidence. Teachers curate; Head Teacher approves the exact parent-facing version.','Use observations and assessments to prepare the monthly report. The Head Teacher approves it before it is sent.'],
  ['Evidence candidates are generated from teaching records.','MPS suggests relevant observations from teaching records.'],
  ['Observation candidates','Suggested observations'],
  ['No parent-eligible observation candidates yet.','No suitable observations have been marked for this report yet.'],
  ['Assessment context','Assessment notes'],
  ['Progress context','Progress'],
  ['Raw rating stays internal','Rating is staff only'],
  ['Record manual Send','Mark as sent'],
  ['Manual delivery records Sent only. MPS never guesses Delivered/Read.','When sent manually, MPS records only “Sent”.'],
  ['Parent-friendly evidence — not a technical scoring grid.','This is the version the parent will see.'],

  // Photos & media
  ['Only approved public-safe MarketingAssets are visible to this persona.','Only photos approved for public use are shown here.'],
  ['Private evidence stays private by default. Marketing and deletion are separate decisions.','Classroom photos stay private unless they are approved for public use.'],
  ['No approved MarketingAssets in this prototype state.','No photos are currently approved for public use.'],
  ['Public-safe asset','Approved for public use'],
  ['Nominate','Send for approval'],
  ['Marketing queue','Photos awaiting approval'],
  ['Review final intended Facebook asset','Review for Facebook'],
  ['Approve the exact asset/context, not a generic permission.','Check this photo and its intended use before approving.'],
  ['Reject for marketing does not delete the legitimate private classroom photo.','Rejecting public use does not delete the classroom photo.'],
  ['Approve asset','Approve for public use'],
  ['Reject for marketing','Reject public use'],
  ['Deletion is different from marketing rejection.','Deleting a photo is separate from deciding whether it can be used publicly.'],
  ['The photo leaves normal use immediately and remains in a restricted recycle bin for 30 days unless a retention hold applies.','The photo moves to the recycle bin and can be restored for 30 days unless it must be kept.'],

  // Staff & access
  ['One real person, one account. Permission bundles are additive; Head Teacher is not automatically System Administrator.','Each staff member has their own account. Give them only the access they need.'],
  ['<th>Permission bundles</th><th>Scope</th>','<th>Access</th><th>Class / area</th>'],
  ['Ordinary staff → System Administrator reset. Last/only administrator → configured secure recovery. Platform break-glass requires ownership/control verification and is audited.','A System Administrator can reset staff passwords. If the last administrator is locked out, use the secure account-recovery process.'],
  ['Disabling access never removes historical attribution. One real person keeps one MPS identity even when responsibilities change.','Deactivating an account stops future access. Past actions remain linked to that staff member.'],
  ['Preschool-controlled MPS identity; personal email is not required.','Create a separate MPS account for this staff member. A personal email is not required.'],
  ['Permission bundle','Access role'],
  ['One account can hold several bundles without role switching.','Give this account access to the areas this person needs.'],
  ['Deactivation stops future access but preserves historical attribution.','Deactivating the account stops future access. Past actions remain in the history.'],
  ['Historical access','Past access'],
  ['Disabling access never deletes attribution.','Past actions remain linked to this account.'],
  ['Former bundle','Previous access'],
  ['Historical actions','Past actions'],
  ['Retained / attributable','Kept in history']
];

function mpsPlainLanguageHtml(html){
  let out=String(html??'');
  MPS_PLAIN_LANGUAGE_REPLACEMENTS.forEach(([from,to])=>{out=out.split(from).join(to)});
  // These labels are display-only, but the stored values must remain unchanged.
  out=out.replace(/<option([^>]*)>Parent-eligible candidate<\/option>/g,'<option value="Parent-eligible candidate"$1>Can be used in parent report</option>');
  out=out.replace(/<option([^>]*)>Internal<\/option>/g,'<option value="Internal"$1>Staff only</option>');
  return out;
}

const _mpsPlainShell=shell;
shell=function(content){return mpsPlainLanguageHtml(_mpsPlainShell(content))};

const _mpsPlainModal=modal;
modal=function(title,sub,body,foot=''){return mpsPlainLanguageHtml(_mpsPlainModal(title,sub,body,foot))};

if(typeof drawer==='function'){
  const _mpsPlainDrawer=drawer;
  drawer=function(title,sub,body,foot=''){return mpsPlainLanguageHtml(_mpsPlainDrawer(title,sub,body,foot))};
}

const _mpsPlainParentApplication=renderParentApplication;
renderParentApplication=function(){return mpsPlainLanguageHtml(_mpsPlainParentApplication())};

const _mpsPlainParentOnboarding=renderParentOnboarding;
renderParentOnboarding=function(){return mpsPlainLanguageHtml(_mpsPlainParentOnboarding())};

// Refresh once after installing the copy layer so a normal reload and Reset use
// the same final staff-facing language.
render();
// Final staff-language pass.
// Some earlier prototype modules add contextual HTML after shell() has already
// rendered. Apply the same presentation-only wording at the final render boundary
// so those late additions cannot leak architecture language into the staff UI.

const MPS_PLAIN_LANGUAGE_FINAL_REPLACEMENTS = [
  ['Automatic weekly baseline. Events, birthdays and holiday references cannot silently change this status.','Events and birthdays do not change opening hours.'],
  ['Operating exception. Events, birthdays and holiday references cannot silently change this status.','This day has a changed operating status. Events and birthdays do not change opening hours.'],
  ['Events, birthdays and holiday references cannot silently change this status.','Events and birthdays do not change opening hours.'],
  ['It does not change operating-day truth or invent a lesson.','It does not change opening hours or create a lesson plan.'],
  ['Planning context only.','Calendar note.'],
  ['Important-date context only.','Calendar note.'],
  ['staff-created event','calendar entry'],
  ['derived from DOB already held in MPS. Calm context, not an alert.','Birthday'],
  ['No important-date context today','Nothing else scheduled today'],
  ['The operating-day status above remains the operational truth.','The opening status above still applies.'],
  ['Operating amendment history','Opening-status history'],
  ['Restored to automatic baseline (','Returned to regular schedule ('],
  ['Operating-day exception','Change operating status'],
  ['Amend operating-day exception','Change operating status'],
  ['This changes operating truth; it is separate from ordinary calendar events.','Change whether preschool and daycare are open on this date.'],
  ['Amendment history is retained.','Previous changes are kept in the history.'],
  ['Save exception','Save change'],
  ['The holiday label does not decide whether the preschool is open.','Check the opening status above for this day.'],
  ['The case is now in Confirmed Interest; arrange the Visit when the family is ready.','Next step: arrange the Visit.'],
  ['Approved MarketingAssets only','Approved photos only']
];

const _mpsPlainLanguageBase = mpsPlainLanguageHtml;
mpsPlainLanguageHtml = function(html){
  let out=_mpsPlainLanguageBase(html);
  MPS_PLAIN_LANGUAGE_FINAL_REPLACEMENTS.forEach(([from,to])=>{out=out.split(from).join(to)});
  return out;
};

const _mpsPlainFinalRender = render;
render = function(){
  _mpsPlainFinalRender();
  const root=document.getElementById('root');
  const overlayRoot=document.getElementById('overlay');
  if(root) root.innerHTML=mpsPlainLanguageHtml(root.innerHTML);
  if(overlayRoot) overlayRoot.innerHTML=mpsPlainLanguageHtml(overlayRoot.innerHTML);
};

render();
// BQ-094 — Account Admin, profile/settings and password recovery.
// One real person keeps one account. Account Admin is an access capability, not a
// separate identity and not an automatic grant of operational/business authority.

const MPS_ACCOUNT_ADMIN = 'Account Admin';
const MPS_RECOVERY_SMS_CODE_LENGTH = 6;

function mpsUnique(values){return [...new Set((values||[]).filter(Boolean))]}
function mpsSafeDigits(value){return String(value||'').replace(/\D/g,'')}
function mpsMaskMobile(value){
  const raw=String(value||'').trim();
  if(!raw) return 'Not set';
  const digits=mpsSafeDigits(raw);
  if(digits.length<4) return '••••';
  return `••• ••• ${digits.slice(-4)}`;
}
function mpsRandomCode(prefix='RECOVERY'){
  return `${prefix}-${Math.random().toString(36).slice(2,8).toUpperCase()}`;
}
function mpsAccount(id){return db.staff?.accounts?.[id]||null}
function mpsCurrentAccount(){return mpsAccount(currentPersona().id)}
function mpsIsAccountAdminAccount(account){return !!account&&account.status==='active'&&(account.bundles||[]).includes(MPS_ACCOUNT_ADMIN)}
function mpsActiveAccountAdmins(){return Object.values(db.staff?.accounts||{}).filter(mpsIsAccountAdminAccount)}
function mpsAccountAdminCount(){return mpsActiveAccountAdmins().length}
function mpsCurrentIsAccountAdmin(){return mpsIsAccountAdminAccount(mpsCurrentAccount())||has(MPS_ACCOUNT_ADMIN)}
function mpsEnsurePersonaForAccount(account){
  if(!account) return;
  if(!db.personas[account.id]){
    db.personas[account.id]={id:account.id,name:account.name,initials:String(account.name||'Staff').split(/\s+/).filter(Boolean).map(x=>x[0]).slice(0,2).join('').toUpperCase(),bundles:[...(account.bundles||[])],scope:account.scope||'All'};
  }else{
    db.personas[account.id].name=account.name;
    db.personas[account.id].bundles=[...(account.bundles||[])];
    db.personas[account.id].scope=account.scope||db.personas[account.id].scope||'All';
  }
}
function mpsEnsureLastAdminRecovery(){
  const admins=mpsActiveAccountAdmins();
  if(admins.length===1&&!admins[0].recoveryCode){
    admins[0].recoveryCode=mpsRandomCode('MPS');
    admins[0].recoveryCodeCreatedAt=new Date().toISOString();
    return true;
  }
  return false;
}
function mpsMigrateAccountAdminModel(){
  let changed=false;
  db.organization=db.organization||{name:ORG,contactPhone:'',timezone:'Asia/Colombo',settingsHistory:[]};
  if(!db.organization.name){db.organization.name=ORG;changed=true}
  if(!db.organization.timezone){db.organization.timezone='Asia/Colombo';changed=true}
  db.organization.settingsHistory=db.organization.settingsHistory||[];

  Object.values(db.staff?.accounts||{}).forEach(a=>{
    const before=(a.bundles||[]).join('|');
    a.bundles=mpsUnique((a.bundles||[]).map(b=>b==='System Administration'?MPS_ACCOUNT_ADMIN:b));
    if(before!==a.bundles.join('|')) changed=true;
    if(typeof a.recoveryMobile==='undefined'){
      const sample={anjali:'077 000 0101',rashmi:'077 000 0102',maya:'077 000 0103',sajana:'077 000 0104'}[a.id]||'';
      a.recoveryMobile=sample;
      a.recoveryMobileVerified=!!sample;
      changed=true;
    }
    if(typeof a.workEmail==='undefined'){a.workEmail='';changed=true}
    mpsEnsurePersonaForAccount(a);
  });

  // Current tenant prototype starts with the Head Teacher as the first authorised
  // workspace user, while retaining the former admin sample as a second Account Admin.
  const initial=mpsAccount('anjali')||Object.values(db.staff?.accounts||{}).find(a=>a.status==='active');
  if(initial&&!initial.bundles.includes(MPS_ACCOUNT_ADMIN)){
    initial.bundles.push(MPS_ACCOUNT_ADMIN);
    initial.bundles=mpsUnique(initial.bundles);
    mpsEnsurePersonaForAccount(initial);
    changed=true;
  }

  Object.values(db.personas||{}).forEach(p=>{
    const account=mpsAccount(p.id);
    if(account){
      const next=[...(account.bundles||[])];
      if(JSON.stringify(p.bundles)!==JSON.stringify(next)){p.bundles=next;changed=true}
    }else if((p.bundles||[]).includes('System Administration')){
      p.bundles=mpsUnique(p.bundles.map(b=>b==='System Administration'?MPS_ACCOUNT_ADMIN:b));
      changed=true;
    }
  });

  if(mpsEnsureLastAdminRecovery()) changed=true;
  routes.staff.bundles=[MPS_ACCOUNT_ADMIN];
  if(changed) save();
}

function mpsOrganisationName(){return db.organization?.name||ORG}
function mpsTimezoneLabel(value){
  const map={
    'Asia/Colombo':'Sri Lanka — Colombo (UTC+05:30)',
    'Asia/Kolkata':'India — Kolkata (UTC+05:30)',
    'Asia/Dubai':'United Arab Emirates — Dubai (UTC+04:00)',
    'Europe/London':'United Kingdom — London',
    'UTC':'UTC'
  };
  return map[value]||value||'Not set';
}
function mpsTimezoneOptions(selected){
  const options=[
    ['Asia/Colombo','Sri Lanka — Colombo (UTC+05:30)'],
    ['Asia/Kolkata','India — Kolkata (UTC+05:30)'],
    ['Asia/Dubai','United Arab Emirates — Dubai (UTC+04:00)'],
    ['Europe/London','United Kingdom — London'],
    ['UTC','UTC']
  ];
  if(selected&&!options.some(x=>x[0]===selected)) options.push([selected,selected]);
  return options.map(([value,label])=>`<option value="${esc(value)}" ${value===selected?'selected':''}>${esc(label)}</option>`).join('');
}

function mpsToggleAccountMenu(){ui().accountMenuOpen=!ui().accountMenuOpen;save();render()}
function mpsCloseAccountMenu(){ui().accountMenuOpen=false;save()}
function mpsOpenAccountModal(name){ui().accountMenuOpen=false;ui().modal={name,data:null};save();render()}
function mpsAccountMenuHtml(){
  const p=currentPersona();
  const admin=mpsCurrentIsAccountAdmin();
  return `<div class="account-area"><button class="account-trigger" aria-label="Account menu for ${esc(p.name)}" aria-expanded="${ui().accountMenuOpen?'true':'false'}" onclick="mpsToggleAccountMenu()"><span class="user-meta"><b>${esc(p.name)}</b><span>${esc((p.bundles||[]).join(' · '))}</span></span><span class="avatar">${esc(p.initials||'') }</span><span class="account-caret">▾</span></button>${ui().accountMenuOpen?`<div class="account-menu" role="menu"><button role="menuitem" onclick="mpsOpenAccountModal('my-profile')"><strong>My profile</strong><span>Account and password recovery</span></button>${admin?`<button role="menuitem" onclick="mpsOpenAccountModal('preschool-settings')"><strong>Preschool settings</strong><span>Basic preschool account settings</span></button>`:''}<button role="menuitem" onclick="mpsPrototypeSignOut()"><strong>Sign out</strong></button></div>`:''}</div>`;
}

const _mpsAccountBaseShell=shell;
shell=function(content){
  const p=currentPersona();
  let html=_mpsAccountBaseShell(content);
  const old=`<div class="user-meta"><b>${p.name}</b><span>${p.bundles.join(' · ')}</span></div><div class="avatar">${p.initials}</div>`;
  html=html.replace(old,mpsAccountMenuHtml());
  html=html.split(ORG).join(mpsOrganisationName());
  return html;
};

const _mpsAccountBaseSetRoute=setRoute;
setRoute=function(route){ui().accountMenuOpen=false;_mpsAccountBaseSetRoute(route)};

function mpsProfileModal(){
  const p=currentPersona();
  const a=mpsCurrentAccount();
  if(!a) return modal('My profile','Your MPS account.',notice('No staff account is linked to this prototype persona.','warn'),btn('Close','closeOverlay()','secondary'));
  const recovery=a.recoveryMobileVerified?`${mpsMaskMobile(a.recoveryMobile)} · Verified`:a.recoveryMobile?`${mpsMaskMobile(a.recoveryMobile)} · Not verified`:'Not set';
  const sole=mpsIsAccountAdminAccount(a)&&mpsAccountAdminCount()===1;
  return modal('My profile','Your account, access and password recovery.',`${kv('Name',esc(a.name))}${kv('MPS username',esc(a.username))}${kv('Access',esc((a.bundles||[]).join(' · ')))}${kv('Recovery mobile',recovery)}${a.workEmail?kv('Work email',esc(a.workEmail)):''}${sole?kv('Account recovery','Recovery code available'):''}${notice('Use your MPS username and password to sign in. Your verified recovery mobile is used only when you need to recover access.','info')}`,`${btn('Close','closeOverlay()','secondary')}${sole?btn('Recovery code',"openModal('account-recovery-code')",'secondary'):''}${btn('Password & recovery',"openModal('profile-recovery')",'primary')}`);
}
function mpsProfileRecoveryModal(){
  const a=mpsCurrentAccount();
  return modal('Password & recovery','Keep a recovery method you can access if you forget your password.',`${field('Recovery mobile (optional)',a?.recoveryMobile||'','tel',false,'profile_recovery_mobile')}${a?.recoveryMobileVerified?notice(`Verified mobile: ${mpsMaskMobile(a.recoveryMobile)}`,'ok'):notice('A mobile number becomes a recovery method only after you verify it.','info')}${field('Work email (optional)',a?.workEmail||'','email',false,'profile_work_email')}${notice('A work email is optional. MPS does not require staff to have corporate email addresses.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save work email','mpsSaveWorkEmail()','secondary')}${btn('Send verification code','mpsSendRecoveryMobileCode()','primary')}`);
}
function mpsSaveWorkEmail(){
  const a=mpsCurrentAccount();if(!a)return;
  a.workEmail=val('profile_work_email').trim();
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} updated own recovery profile`});
  save();openModal('my-profile');
}
function mpsSendRecoveryMobileCode(){
  const a=mpsCurrentAccount();if(!a)return;
  const mobile=val('profile_recovery_mobile').trim();
  if(mpsSafeDigits(mobile).length<7){alert('Enter a valid mobile number, or leave recovery mobile unset and use Account Admin-assisted recovery.');return}
  a.pendingRecoveryMobile=mobile;
  a.workEmail=val('profile_work_email').trim();
  save();openModal('verify-recovery-mobile');
}
function mpsVerifyRecoveryMobile(){
  const a=mpsCurrentAccount();if(!a)return;
  if(!/^\d{6}$/.test(val('recovery_mobile_code').trim())){alert('Enter the 6-digit verification code.');return}
  a.recoveryMobile=a.pendingRecoveryMobile||a.recoveryMobile;
  a.recoveryMobileVerified=true;
  delete a.pendingRecoveryMobile;
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} verified recovery mobile ending ${mpsSafeDigits(a.recoveryMobile).slice(-4)}`});
  save();openModal('my-profile');
}
function mpsRecoveryCodeModal(){
  const a=mpsCurrentAccount();
  if(!a||!mpsIsAccountAdminAccount(a)||mpsAccountAdminCount()!==1) return modal('Recovery code','Recovery codes are reserved for the sole/last Account Admin.',notice('Another active Account Admin is available, so normal self-service or Account Admin-assisted recovery can be used.','info'),btn('Close','closeOverlay()','secondary'));
  if(!a.recoveryCode){a.recoveryCode=mpsRandomCode('MPS');a.recoveryCodeCreatedAt=new Date().toISOString();save()}
  return modal('Account recovery code','Keep this code somewhere safe outside MPS. Use it only if normal mobile recovery is unavailable.',`${kv('Recovery code',`<strong class="mono-code">${esc(a.recoveryCode)}</strong>`)}${notice('Generating a new code invalidates the previous one.','warn')}`,`${btn('Close','closeOverlay()','secondary')}${btn('Generate new code','mpsRegenerateRecoveryCode()','secondary')}`);
}
function mpsRegenerateRecoveryCode(){const a=mpsCurrentAccount();if(!a)return;a.recoveryCode=mpsRandomCode('MPS');a.recoveryCodeCreatedAt=new Date().toISOString();db.staff.history.push({at:new Date().toISOString(),text:`${a.username} regenerated sole-admin recovery code`});save();openModal('account-recovery-code')}

function mpsPreschoolSettingsModal(){
  if(!mpsCurrentIsAccountAdmin()) return modal('Preschool settings','Account Admin access is required.',notice('Ask an Account Admin if these account-level settings need to change.','info'),btn('Close','closeOverlay()','secondary'));
  const o=db.organization;
  return modal('Preschool settings','Basic settings for this preschool workspace.',`${field('Preschool name',o.name||ORG,'text',false,'org_name')}${field('Preschool contact phone',o.contactPhone||'','tel',false,'org_phone')}<div class="field"><label>Preschool timezone</label><select id="org_timezone">${mpsTimezoneOptions(o.timezone)}</select><small>Use the timezone where this preschool operates.</small></div>${notice('Operational settings stay in their own workspaces. Calendar opening changes, Billing work and teaching settings do not belong here.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save settings','mpsSavePreschoolSettings()','primary')}`);
}
function mpsSavePreschoolSettings(){
  if(!mpsCurrentIsAccountAdmin()){alert('Account Admin access is required.');return}
  const o=db.organization;
  const nextName=val('org_name').trim();
  const nextPhone=val('org_phone').trim();
  const nextTimezone=val('org_timezone');
  if(!nextName){alert('Enter the preschool name.');return}
  if(nextTimezone!==o.timezone&&!confirm(`Change the preschool timezone from ${mpsTimezoneLabel(o.timezone)} to ${mpsTimezoneLabel(nextTimezone)}? This changes how the preschool interprets and displays operational times.`)) return;
  const changes=[];
  if(nextName!==o.name) changes.push(`name: ${o.name} → ${nextName}`);
  if(nextPhone!==o.contactPhone) changes.push('contact phone updated');
  if(nextTimezone!==o.timezone) changes.push(`timezone: ${o.timezone} → ${nextTimezone}`);
  o.name=nextName;o.contactPhone=nextPhone;o.timezone=nextTimezone;
  if(changes.length)o.settingsHistory.push({at:new Date().toISOString(),by:currentPersona().name,changes});
  save();closeOverlay();
}

function mpsBundleOptions(){return ['Head Teacher','Class Teacher','Assistant Teacher','Daycare','Admissions','Accounts','Social Media',MPS_ACCOUNT_ADMIN]}
function mpsCreateStaffModal(){
  return modal('Create staff account','One person, one MPS account. Add only the access this person actually needs.',`${field('Full name','New Teacher','text',false,'staff_name')}${field('MPS username','new.teacher','text',false,'staff_username')}${selectField('Initial access',mpsBundleOptions(),'Class Teacher','staff_bundle')}${field('Class / area','Baby Class','text',false,'staff_scope')}${field('Recovery mobile (optional)','','tel',false,'staff_recovery_mobile')}${notice('The staff member verifies their recovery mobile from My profile. Work email is not required.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create account','createStaff()','primary')}`);
}
createStaff=function(){
  const name=val('staff_name').trim(),username=val('staff_username').trim(),bundle=val('staff_bundle'),id='staff_'+Date.now();
  if(!name||!username){alert('Enter the staff member name and MPS username.');return}
  const recoveryMobile=val('staff_recovery_mobile').trim();
  db.staff.accounts[id]={id,name,username,bundles:[bundle],scope:val('staff_scope').trim()||'All',status:'active',recoveryMobile,recoveryMobileVerified:false,workEmail:''};
  mpsEnsurePersonaForAccount(db.staff.accounts[id]);
  db.staff.history.push({at:new Date().toISOString(),text:`Account ${username} created with ${bundle}`});
  mpsEnsureLastAdminRecovery();
  closeOverlay();
};
function mpsManageAccessModal(id){
  const a=mpsAccount(id);if(!a)return modal('Manage access','',notice('Staff account not found.','warn'),btn('Close','closeOverlay()','secondary'));
  const isLast=mpsIsAccountAdminAccount(a)&&mpsAccountAdminCount()===1;
  return modal('Manage access','One account can hold several responsibilities without role switching.',`${mpsBundleOptions().map(b=>`<label class="check-row"><input data-bundle type="checkbox" value="${b}" ${checked((a.bundles||[]).includes(b))}> ${b}</label>`).join('')}${field('Class / area',a.scope,'text',false,'access_scope')}${isLast?notice('This is the last active Account Admin. Give Account Admin access to someone else before removing or deactivating this account.','warn'):''}${notice('Account Admin manages MPS accounts and basic preschool settings. It does not automatically grant access to Admissions, Billing, Health, teaching or other preschool work.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Send password reset',`mpsAdminPasswordReset('${a.id}')`,'secondary')}${btn('Deactivate account',`deactivateStaff('${a.id}')`,'danger')}${btn('Save access',`saveAccess('${a.id}')`,'primary')}`);
}
saveAccess=function(id){
  const a=mpsAccount(id);if(!a)return;
  const next=mpsUnique(Array.from(document.querySelectorAll('[data-bundle]:checked')).map(x=>x.value));
  const removingLast=(a.bundles||[]).includes(MPS_ACCOUNT_ADMIN)&&!next.includes(MPS_ACCOUNT_ADMIN)&&mpsAccountAdminCount()===1;
  if(removingLast){alert('MPS must always have at least one active Account Admin. Give Account Admin access to another active staff member first.');return}
  a.bundles=next;a.scope=val('access_scope').trim()||'All';
  mpsEnsurePersonaForAccount(a);
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} access updated: ${a.bundles.join(', ')}`});
  mpsEnsureLastAdminRecovery();
  closeOverlay();
};
deactivateStaff=function(id){
  const a=mpsAccount(id);if(!a)return;
  if(mpsIsAccountAdminAccount(a)&&mpsAccountAdminCount()===1){alert('This is the last active Account Admin. Give Account Admin access to another active staff member before deactivating this account.');return}
  a.status='inactive';
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} deactivated; past actions remain linked to this person`});
  mpsEnsureLastAdminRecovery();
  closeOverlay();
};
function mpsAdminPasswordReset(id){
  const a=mpsAccount(id);if(!a)return;
  if(!mpsCurrentIsAccountAdmin()){alert('Account Admin access is required.');return}
  if(a.recoveryMobileVerified&&a.recoveryMobile){
    a.adminResetSentAt=new Date().toISOString();
    db.staff.history.push({at:new Date().toISOString(),text:`${currentPersona().name} initiated password reset for ${a.username}`});
    save();
    ui().modal={name:'admin-reset-result',data:{id:a.id,via:'mobile'}};save();render();return;
  }
  a.assistedResetCode=mpsRandomCode('RESET');
  a.assistedResetCreatedAt=new Date().toISOString();
  db.staff.history.push({at:new Date().toISOString(),text:`${currentPersona().name} created one-time reset route for ${a.username}`});
  save();ui().modal={name:'admin-reset-result',data:{id:a.id,via:'code'}};save();render();
}
function mpsAdminResetResultModal(data){
  const a=mpsAccount(data.id);
  if(data.via==='mobile') return modal('Password reset sent','The staff member creates their own new password.',`${kv('Staff member',esc(a.name))}${kv('Sent to',mpsMaskMobile(a.recoveryMobile))}${notice('The Account Admin does not see or choose the staff member’s password.','info')}`,btn('Done','closeOverlay()','primary'));
  return modal('One-time reset code','Give this code to the staff member privately. They use it to create their own new password.',`${kv('Staff member',esc(a.name))}${kv('Reset code',`<strong class="mono-code">${esc(a.assistedResetCode)}</strong>`)}${notice('The code is for one reset only. The Account Admin never sees the new password.','info')}`,btn('Done','closeOverlay()','primary'));
}

const _mpsAccountBaseRenderStaff=renderStaff;
renderStaff=function(){
  const acc=Object.values(db.staff.accounts);
  return shell(`${pageHead('Organisation','Staff & access','Each staff member has their own account. Give them only the access they need.',btn('Add staff account',"openModal('staff-account')",'primary'))}<div class="table-wrap"><table class="table"><thead><tr><th>Staff member</th><th>MPS login</th><th>Access</th><th>Class / area</th><th>Status</th><th></th></tr></thead><tbody>${acc.map(a=>`<tr><td><div class="name">${esc(a.name)}</div></td><td>${esc(a.username)}</td><td>${esc((a.bundles||[]).join(' · '))}</td><td>${esc(a.scope||'All')}</td><td>${badge(a.status,a.status==='active'?'green':'grey')}</td><td>${btn(a.status==='active'?'Manage':'History',a.status==='active'?`openModal('manage-access',{id:'${a.id}'})`:`openModal('access-history',{id:'${a.id}'})`,'secondary','sm')}</td></tr>`).join('')}</tbody></table></div><div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Password recovery</h3><p>Staff normally reset their own password using a verified recovery mobile. Account Admin can help when self-service recovery is unavailable.</p></div><div class="span-6 card"><h3>Account Admin</h3><p>One or more people can be Account Admin. MPS always keeps at least one active Account Admin so the preschool cannot accidentally lock itself out.</p></div></div>`)};

function mpsAccountAdminToday(){
  const p=currentPersona();
  const operational=(p.bundles||[]).some(b=>b!==MPS_ACCOUNT_ADMIN);
  if(operational) return null;
  return shell(`${pageHead('Today','Today','Manage the preschool account and staff access.')}${notice('You have Account Admin access only. Operational child, teaching, Admissions, Billing and Health information is not included automatically.','info')}<div class="grid" style="margin-top:14px"><div class="span-6 card"><h3>Staff & access</h3><p>Add staff, update access or help someone recover their password.</p>${btn('Open Staff & access',"setRoute('staff')",'primary')}</div><div class="span-6 card"><h3>Preschool settings</h3><p>Update basic preschool account settings such as the preschool timezone.</p>${btn('Open Preschool settings',"mpsOpenAccountModal('preschool-settings')",'secondary')}</div></div>`);
}
const _mpsAccountBaseRenderToday=renderToday;
renderToday=function(){return mpsAccountAdminToday()||_mpsAccountBaseRenderToday()};

function mpsLoginPage(){
  const mode=ui().authMode||'login';
  const msg=ui().authMessage?`<div class="notice ok">${esc(ui().authMessage)}</div>`:'';
  if(mode==='forgot') return mpsAuthShell(`<div class="auth-card"><div class="eyebrow">Password recovery</div><h2>Forgot password?</h2><p>Enter your MPS username. If a verified recovery mobile is available, MPS will send a one-time code.</p>${field('MPS username',ui().authUsername||'','text',false,'auth_username')}${btn('Back','mpsAuthBack()','secondary')}${btn('Continue','mpsStartPasswordRecovery()','primary')}</div>`);
  if(mode==='code'){
    const a=mpsAccount(ui().passwordResetAccount);
    return mpsAuthShell(`<div class="auth-card"><div class="eyebrow">Password recovery</div><h2>Check your mobile</h2><p>Enter the 6-digit code sent to ${esc(mpsMaskMobile(a?.recoveryMobile))}.</p>${field('Verification code','','text',false,'auth_sms_code')}${btn('Back','mpsAuthBack()','secondary')}${btn('Verify code','mpsVerifyPasswordResetCode()','primary')}</div>`);
  }
  if(mode==='no-recovery'){
    const a=mpsAccount(ui().passwordResetAccount);
    const sole=mpsIsAccountAdminAccount(a)&&mpsAccountAdminCount()===1&&a?.recoveryCode;
    return mpsAuthShell(`<div class="auth-card"><div class="eyebrow">Password recovery</div><h2>Another recovery method is needed</h2><p>No verified recovery mobile is available for this account.</p>${a?.assistedResetCode?`${field('Reset code from Account Admin','','text',false,'auth_assisted_code')}${btn('Use reset code','mpsUseAssistedResetCode()','primary')}`:notice('Ask an Account Admin to start a password reset for you.','info')}${sole?`${field('Account recovery code','','text',false,'auth_recovery_code')}${btn('Use recovery code','mpsUseSoleAdminRecoveryCode()','secondary')}`:''}<div style="margin-top:12px">${btn('Back to sign in','mpsAuthBack()','secondary')}</div></div>`);
  }
  if(mode==='new-password') return mpsAuthShell(`<div class="auth-card"><div class="eyebrow">Password recovery</div><h2>Create a new password</h2>${field('New password','','password',false,'auth_new_password')}${field('Confirm new password','','password',false,'auth_confirm_password')}${btn('Save new password','mpsCompletePasswordReset()','primary')}</div>`);
  return mpsAuthShell(`<div class="auth-card"><div class="eyebrow">${esc(mpsOrganisationName())}</div><h2>Sign in to MPS</h2>${msg}${field('MPS username',ui().authUsername||'anjali.fernando','text',false,'login_username')}${field('Password','','password',false,'login_password')}<div class="auth-actions">${btn('Forgot password?','mpsShowForgotPassword()','secondary')}${btn('Sign in','mpsPrototypeSignIn()','primary')}</div></div>`);
}
function mpsAuthShell(card){return `<div class="auth-screen"><div class="auth-brand"><div class="brandmark">M</div><div><h1>MPS</h1><span>Simple · Practical · Affordable</span></div></div>${card}<div class="auth-foot">Prototype review sign-in flow</div></div>`}
function mpsPrototypeSignOut(){ui().accountMenuOpen=false;ui().modal=null;ui().drawer=null;ui().signedOut=true;ui().authMode='login';ui().authUsername=currentPersona().username||mpsCurrentAccount()?.username||'';save();render()}
function mpsPrototypeSignIn(){
  const username=val('login_username').trim(),password=val('login_password');
  const a=Object.values(db.staff.accounts).find(x=>x.username===username);
  if(!a||a.status!=='active'){ui().authMessage='Check your username or ask an Account Admin for help.';save();render();return}
  if(!password){ui().authMessage='Enter your password.';save();render();return}
  mpsEnsurePersonaForAccount(a);ui().persona=a.id;ui().signedOut=false;ui().authMode='login';ui().authMessage='';save();render();
}
function mpsShowForgotPassword(){ui().authUsername=val('login_username').trim();ui().authMode='forgot';ui().authMessage='';save();render()}
function mpsAuthBack(){ui().authMode='login';ui().passwordResetAccount=null;ui().authMessage='';save();render()}
function mpsStartPasswordRecovery(){
  const username=val('auth_username').trim();
  const a=Object.values(db.staff.accounts).find(x=>x.username===username&&x.status==='active');
  if(!a){ui().authUsername=username;ui().authMessage='If this account exists, use its available recovery method or ask an Account Admin.';ui().authMode='login';save();render();return}
  ui().authUsername=username;ui().passwordResetAccount=a.id;
  ui().authMode=a.recoveryMobileVerified&&a.recoveryMobile?'code':'no-recovery';save();render();
}
function mpsVerifyPasswordResetCode(){if(!/^\d{6}$/.test(val('auth_sms_code').trim())){alert('Enter the 6-digit verification code.');return}ui().authMode='new-password';save();render()}
function mpsUseAssistedResetCode(){const a=mpsAccount(ui().passwordResetAccount);if(!a||val('auth_assisted_code').trim()!==a.assistedResetCode){alert('That reset code is not valid.');return}delete a.assistedResetCode;ui().authMode='new-password';save();render()}
function mpsUseSoleAdminRecoveryCode(){const a=mpsAccount(ui().passwordResetAccount);if(!a||val('auth_recovery_code').trim()!==a.recoveryCode){alert('That recovery code is not valid.');return}a.recoveryCode=null;ui().authMode='new-password';save();render()}
function mpsCompletePasswordReset(){
  const a=mpsAccount(ui().passwordResetAccount);if(!a)return mpsAuthBack();
  const p=val('auth_new_password'),c=val('auth_confirm_password');
  if(p.length<8){alert('Use at least 8 characters for the new password.');return}
  if(p!==c){alert('The passwords do not match.');return}
  a.passwordResetAt=new Date().toISOString();
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} completed password recovery`});
  ui().authMode='login';ui().authMessage='Password updated. You can sign in now.';ui().passwordResetAccount=null;save();render();
}

const _mpsAccountModalView=modalView;
modalView=function(m){
  if(m?.name==='my-profile') return mpsProfileModal();
  if(m?.name==='profile-recovery') return mpsProfileRecoveryModal();
  if(m?.name==='verify-recovery-mobile'){
    const a=mpsCurrentAccount();
    return modal('Verify recovery mobile','Enter the 6-digit code sent to your mobile.',`${kv('Mobile',mpsMaskMobile(a?.pendingRecoveryMobile))}${field('Verification code','','text',false,'recovery_mobile_code')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Verify mobile','mpsVerifyRecoveryMobile()','primary')}`);
  }
  if(m?.name==='account-recovery-code') return mpsRecoveryCodeModal();
  if(m?.name==='preschool-settings') return mpsPreschoolSettingsModal();
  if(m?.name==='staff-account') return mpsCreateStaffModal();
  if(m?.name==='manage-access') return mpsManageAccessModal(m.data?.id);
  if(m?.name==='admin-reset-result') return mpsAdminResetResultModal(m.data||{});
  return _mpsAccountModalView(m);
};

// Account Admin does not imply operational Calendar authority.
calendarCanManage=function(){return has('Head Teacher')};

// Preserve Account Admin as an account capability rather than silently treating it
// as the retired System Administration business permission.
const _mpsAccountBaseHas=has;
has=function(bundle){if(bundle==='System Administration')return false;return _mpsAccountBaseHas(bundle)};

const _mpsAccountBaseRender=render;
render=function(){
  mpsMigrateAccountAdminModel();
  if(ui().signedOut){document.getElementById('root').innerHTML=mpsLoginPage();document.getElementById('overlay').innerHTML='';return}
  _mpsAccountBaseRender();
  const root=document.getElementById('root');
  const overlayRoot=document.getElementById('overlay');
  if(root&&mpsOrganisationName()!==ORG) root.innerHTML=root.innerHTML.split(ORG).join(mpsOrganisationName());
  if(overlayRoot&&mpsOrganisationName()!==ORG) overlayRoot.innerHTML=overlayRoot.innerHTML.split(ORG).join(mpsOrganisationName());
};

render();
// Owner-review header/profile/search simplicity refinement.
// Keep the top bar about identity and finding people, not permission inventory or database references.

function mpsHeaderSearchPlaceholder(){
  return (has('Admissions')||has('Head Teacher'))?'Search child or parent…':'Search child…';
}

mpsAccountMenuHtml=function(){
  const p=currentPersona();
  const admin=mpsCurrentIsAccountAdmin();
  return `<div class="account-area"><button class="account-trigger" aria-label="Account menu for ${esc(p.name)}" aria-expanded="${ui().accountMenuOpen?'true':'false'}" onclick="mpsToggleAccountMenu()"><span class="user-meta"><b>${esc(p.name)}</b></span><span class="avatar">${esc(p.initials||'')}</span><span class="account-caret">▾</span></button>${ui().accountMenuOpen?`<div class="account-menu" role="menu"><button role="menuitem" onclick="mpsOpenAccountModal('my-profile')"><strong>My profile</strong></button>${admin?`<button role="menuitem" onclick="mpsOpenAccountModal('preschool-settings')"><strong>Preschool settings</strong></button>`:''}<button role="menuitem" onclick="mpsPrototypeSignOut()"><strong>Sign out</strong></button></div>`:''}</div>`;
};

const _mpsHeaderProfileBaseShell=shell;
shell=function(content){
  let html=_mpsHeaderProfileBaseShell(content);
  html=html.replace('placeholder="Search child, family, invoice…"',`placeholder="${mpsHeaderSearchPlaceholder()}"`);
  return html;
};

globalSearch=function(q){
  q=(q||'').trim().toLowerCase();
  if(!q)return;
  const qDigits=mpsSafeDigits(q);
  if(allowed('admissions')){
    const a=Object.values(db.admissions).find(c=>
      String(c.childName||'').toLowerCase().includes(q)||
      String(c.guardian||'').toLowerCase().includes(q)||
      (qDigits.length>=4&&mpsSafeDigits(c.phone).includes(qDigits))
    );
    if(a){ui().admissionsCase=a.id;ui().admissionsTab='overview';setRoute('admissions');return}
  }
  if(allowed('billing')){
    const inv=Object.values(db.billing.invoices).find(i=>String(i.childName||'').toLowerCase().includes(q));
    if(inv){setRoute('billing');openModal('invoice-detail',{id:inv.id});return}
  }
  alert('No child or parent in your authorised MPS access matched that search.');
};

function mpsBillingInvoiceSearch(q){
  q=(q||'').trim().toLowerCase();
  if(!q)return;
  const inv=Object.values(db.billing.invoices).find(i=>
    String(i.number||'').toLowerCase().includes(q)||
    String(i.childName||'').toLowerCase().includes(q)
  );
  if(!inv){alert('No invoice matched that child or invoice number.');return}
  openModal('invoice-detail',{id:inv.id});
}

const _mpsHeaderProfileBaseRenderBilling=renderBilling;
renderBilling=function(){
  let html=_mpsHeaderProfileBaseRenderBilling();
  const lookup='<div class="billing-lookup"><input aria-label="Find invoice" placeholder="Find by child or invoice number…" onkeydown="if(event.key===\'Enter\')mpsBillingInvoiceSearch(this.value)"/><button class="btn secondary sm" onclick="mpsBillingInvoiceSearch(this.previousElementSibling.value)">Find</button></div>';
  return html.replace('<div class="section-title">Invoices</div>',`<div class="section-title">Invoices</div>${lookup}`);
};

// part-043 renders once before this final refinement is loaded. Render again so the
// first visible frame uses the compact header rather than waiting for another action.
render();
// BQ-092 applied to BQ-094 account/profile/settings contact inputs.
// Existing cross-cutting rule: validate and normalise at every input boundary.

function mpsPhoneCountrySelect(id,selected,label='Phone country'){
  const country=selected||mpsDefaultPhoneCountry();
  return `<div class="field"><label>${esc(label)}</label><select id="${id}">${mpsPhoneCountryOptions().map(x=>`<option value="${x.code}" ${x.code===country?'selected':''}>${esc(x.label)}</option>`).join('')}</select></div>`;
}
function mpsOptionalNormalisePhone(raw,countryCode){
  if(!String(raw||'').trim()) return {ok:true,value:''};
  return mpsNormalisePhone(raw,countryCode);
}

mpsProfileRecoveryModal=function(){
  const a=mpsCurrentAccount();
  const country=a?.recoveryMobileCountry||mpsDefaultPhoneCountry();
  const phoneField=`<div class="field"><label>Recovery mobile (optional)</label><input id="profile_recovery_mobile" type="tel" inputmode="tel" autocomplete="tel" value="${esc(a?.recoveryMobile||'')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
  return modal('Password & recovery','Keep a recovery method you can access if you forget your password.',`<div class="form-grid">${mpsPhoneCountrySelect('profile_recovery_country',country,'Mobile country')}${phoneField}</div>${a?.recoveryMobileVerified?notice(`Verified mobile: ${mpsMaskMobile(a.recoveryMobile)}`,'ok'):notice('A mobile number becomes a recovery method only after you verify it.','info')}${field('Work email (optional)',a?.workEmail||'','email',false,'profile_work_email')}${notice('A work email is optional. MPS does not require staff to have corporate email addresses.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save work email','mpsSaveWorkEmail()','secondary')}${btn('Send verification code','mpsSendRecoveryMobileCode()','primary')}`);
};

mpsSaveWorkEmail=function(){
  const a=mpsCurrentAccount();if(!a)return;
  const email=mpsNormaliseEmail(val('profile_work_email'));
  if(!email.ok){alert(email.error);return}
  a.workEmail=email.value;
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} updated own recovery profile`});
  save();openModal('my-profile');
};

mpsSendRecoveryMobileCode=function(){
  const a=mpsCurrentAccount();if(!a)return;
  const country=val('profile_recovery_country')||mpsDefaultPhoneCountry();
  const phone=mpsNormalisePhone(val('profile_recovery_mobile'),country);
  if(!phone.ok){alert(phone.error);return}
  const email=mpsNormaliseEmail(val('profile_work_email'));
  if(!email.ok){alert(email.error);return}
  a.pendingRecoveryMobile=phone.value;
  a.pendingRecoveryMobileCountry=country;
  a.workEmail=email.value;
  save();openModal('verify-recovery-mobile');
};

mpsVerifyRecoveryMobile=function(){
  const a=mpsCurrentAccount();if(!a)return;
  if(!/^\d{6}$/.test(val('recovery_mobile_code').trim())){alert('Enter the 6-digit verification code.');return}
  a.recoveryMobile=a.pendingRecoveryMobile||a.recoveryMobile;
  a.recoveryMobileCountry=a.pendingRecoveryMobileCountry||a.recoveryMobileCountry||mpsDefaultPhoneCountry();
  a.recoveryMobileVerified=true;
  delete a.pendingRecoveryMobile;
  delete a.pendingRecoveryMobileCountry;
  db.staff.history.push({at:new Date().toISOString(),text:`${a.username} verified recovery mobile ending ${mpsSafeDigits(a.recoveryMobile).slice(-4)}`});
  save();openModal('my-profile');
};

mpsPreschoolSettingsModal=function(){
  if(!mpsCurrentIsAccountAdmin()) return modal('Preschool settings','Account Admin access is required.',notice('Ask an Account Admin if these account-level settings need to change.','info'),btn('Close','closeOverlay()','secondary'));
  const o=db.organization;
  const country=o.contactPhoneCountry||mpsDefaultPhoneCountry();
  const phoneField=`<div class="field"><label>Preschool contact phone</label><input id="org_phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(o.contactPhone||'')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
  return modal('Preschool settings','Basic settings for this preschool workspace.',`${field('Preschool name',o.name||ORG,'text',false,'org_name')}<div class="form-grid">${mpsPhoneCountrySelect('org_phone_country',country,'Phone country')}${phoneField}</div><div class="field"><label>Preschool timezone</label><select id="org_timezone">${mpsTimezoneOptions(o.timezone)}</select><small>Use the timezone where this preschool operates.</small></div>${notice('Operational settings stay in their own workspaces. Calendar opening changes, Billing work and teaching settings do not belong here.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Save settings','mpsSavePreschoolSettings()','primary')}`);
};

mpsSavePreschoolSettings=function(){
  if(!mpsCurrentIsAccountAdmin()){alert('Account Admin access is required.');return}
  const o=db.organization;
  const nextName=val('org_name').trim();
  const nextPhoneCountry=val('org_phone_country')||mpsDefaultPhoneCountry();
  const nextPhone=mpsOptionalNormalisePhone(val('org_phone'),nextPhoneCountry);
  const nextTimezone=val('org_timezone');
  if(!nextName){alert('Enter the preschool name.');return}
  if(!nextPhone.ok){alert(nextPhone.error);return}
  if(nextTimezone!==o.timezone&&!confirm(`Change the preschool timezone from ${mpsTimezoneLabel(o.timezone)} to ${mpsTimezoneLabel(nextTimezone)}? This changes how the preschool interprets and displays operational times.`)) return;
  const changes=[];
  if(nextName!==o.name) changes.push(`name: ${o.name} → ${nextName}`);
  if(nextPhone.value!==o.contactPhone) changes.push('contact phone updated');
  if(nextTimezone!==o.timezone) changes.push(`timezone: ${o.timezone} → ${nextTimezone}`);
  o.name=nextName;o.contactPhone=nextPhone.value;o.contactPhoneCountry=nextPhoneCountry;o.timezone=nextTimezone;
  if(changes.length)o.settingsHistory.push({at:new Date().toISOString(),by:currentPersona().name,changes});
  save();closeOverlay();
};

mpsCreateStaffModal=function(){
  const country=mpsDefaultPhoneCountry();
  const phoneField='<div class="field"><label>Recovery mobile (optional)</label><input id="staff_recovery_mobile" type="tel" inputmode="tel" autocomplete="tel" value="" oninput="this.value=mpsPhoneInput(this.value)" /></div>';
  return modal('Create staff account','One person, one MPS account. Add only the access this person actually needs.',`${field('Full name','New Teacher','text',false,'staff_name')}${field('MPS username','new.teacher','text',false,'staff_username')}${selectField('Initial access',mpsBundleOptions(),'Class Teacher','staff_bundle')}${field('Class / area','Baby Class','text',false,'staff_scope')}<div class="form-grid">${mpsPhoneCountrySelect('staff_recovery_country',country,'Mobile country')}${phoneField}</div>${notice('The staff member verifies their recovery mobile from My profile. Work email is not required.','info')}`,`${btn('Cancel','closeOverlay()','secondary')}${btn('Create account','createStaff()','primary')}`);
};

createStaff=function(){
  const name=val('staff_name').trim(),username=val('staff_username').trim(),bundle=val('staff_bundle'),id='staff_'+Date.now();
  if(!name||!username){alert('Enter the staff member name and MPS username.');return}
  const country=val('staff_recovery_country')||mpsDefaultPhoneCountry();
  const recovery=mpsOptionalNormalisePhone(val('staff_recovery_mobile'),country);
  if(!recovery.ok){alert(recovery.error);return}
  db.staff.accounts[id]={id,name,username,bundles:[bundle],scope:val('staff_scope').trim()||'All',status:'active',recoveryMobile:recovery.value,recoveryMobileCountry:country,recoveryMobileVerified:false,workEmail:''};
  mpsEnsurePersonaForAccount(db.staff.accounts[id]);
  db.staff.history.push({at:new Date().toISOString(),text:`Account ${username} created with ${bundle}`});
  mpsEnsureLastAdminRecovery();
  closeOverlay();
};

// Keep the first visible frame on the newest overrides.
render();
// BQ-092 follow-through — apply the approved country-aware contact validation
// to existing secure parent forms as well as newer account/admin surfaces.
// This does not add new mandatory fields; it enforces the contact fields those
// workflows already collect and keeps stored phone values dependable.

function mpsParentApplicationPhoneCountry(caseId){
  const c=db.admissions?.[caseId];
  const d=c?.application?.draft||{};
  return d.phoneCountry||c?.phoneCountry||mpsDefaultPhoneCountry();
}

const _mpsBq092ContactBaseRenderParentApplication=renderParentApplication;
renderParentApplication=function(){
  let html=_mpsBq092ContactBaseRenderParentApplication();
  const caseId=ui().parentApplicationCase;
  const c=db.admissions?.[caseId];
  const d=c?.application?.draft;
  if(!c||!d||ui().parentApplicationStep!==1) return html;
  const country=mpsParentApplicationPhoneCountry(caseId);
  const oldPhone=field('Registered phone',d.phone||c.phone||'','text',false,'pa_phone');
  const phoneField=`<div class="field"><label>Registered phone</label><input id="pa_phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(d.phone||c.phone||'')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
  return html.replace(oldPhone,`${mpsPhoneCountrySelect('pa_phone_country',country,'Phone country')}${phoneField}`);
};

function mpsValidateParentApplicationPhone(caseId){
  const input=byId('pa_phone');
  if(!input) return true;
  const country=val('pa_phone_country')||mpsParentApplicationPhoneCountry(caseId);
  const phone=mpsNormalisePhone(input.value,country);
  if(!phone.ok){alert(phone.error);return false}
  input.value=phone.value;
  return true;
}

// Store the Application draft exactly once after contact validation. The older
// helper saved raw phone text before later validation; BQ-092 requires the stored
// draft itself to remain dependable, not merely the final submitted record.
const _mpsBq092ContactBaseSyncApplicationDraft=syncApplicationDraft;
syncApplicationDraft=function(caseId){
  const c=db.admissions?.[caseId];
  if(!c) return;
  const d=c.application.draft||(c.application.draft={});
  ['childName','dob','guardian','service','start'].forEach(k=>{const e=byId('pa_'+k);if(e)d[k]=e.value});
  const input=byId('pa_phone');
  if(input){
    const country=val('pa_phone_country')||mpsParentApplicationPhoneCountry(caseId);
    const phone=mpsNormalisePhone(input.value,country);
    if(phone.ok){d.phone=phone.value;d.phoneCountry=country}
  }
  const n=byId('pa_note');if(n)d.note=n.value;
  save();
};

const _mpsBq092ContactBaseAppContinue=appContinue;
appContinue=function(caseId){
  if(!mpsValidateParentApplicationPhone(caseId)) return;
  return _mpsBq092ContactBaseAppContinue(caseId);
};

const _mpsBq092ContactBaseSubmitApplication=submitApplication;
submitApplication=function(caseId){
  if(!mpsValidateParentApplicationPhone(caseId)) return;
  const result=_mpsBq092ContactBaseSubmitApplication(caseId);
  const c=db.admissions?.[caseId];
  if(c?.application?.status==='submitted'&&c.application.draft?.phoneCountry){
    c.phoneCountry=c.application.draft.phoneCountry;
    save();
  }
  return result;
};

function mpsOnboardingPhoneCountry(caseId,record){
  return record?.phoneCountry||db.admissions?.[caseId]?.phoneCountry||mpsDefaultPhoneCountry();
}

const _mpsBq092ContactBaseGuardianCard=guardianCard;
guardianCard=function(g,i){
  let html=_mpsBq092ContactBaseGuardianCard(g,i);
  const caseId=ui().parentOnboardingCase;
  const country=mpsOnboardingPhoneCountry(caseId,g);
  const oldPhone=field('Registered WhatsApp / mobile',g.phone||'','text',false,`po_g${i}_phone`);
  const phoneField=`<div class="field"><label>Registered WhatsApp / mobile</label><input id="po_g${i}_phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(g.phone||'')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
  return html.replace(oldPhone,`${mpsPhoneCountrySelect(`po_g${i}_phone_country`,country,'Phone country')}${phoneField}`);
};

const _mpsBq092ContactBaseRenderParentOnboarding=renderParentOnboarding;
renderParentOnboarding=function(){
  let html=_mpsBq092ContactBaseRenderParentOnboarding();
  const caseId=ui().parentOnboardingCase;
  const c=db.admissions?.[caseId];
  const o=c?.onboarding;
  if(!c||!o||ui().parentOnboardingStep!==3) return html;
  const e=o.draft?.emergency||{};
  const country=mpsOnboardingPhoneCountry(caseId,e);
  const oldPhone=field('Phone',e.phone||'','text',false,'po_em_phone');
  const phoneField=`<div class="field"><label>Phone</label><input id="po_em_phone" type="tel" inputmode="tel" autocomplete="tel" value="${esc(e.phone||'')}" oninput="this.value=mpsPhoneInput(this.value)" /></div>`;
  return html.replace(oldPhone,`${mpsPhoneCountrySelect('po_em_phone_country',country,'Phone country')}${phoneField}`);
};

function mpsValidateOnboardingContactStep(caseId,step){
  const o=ensureOnboarding(caseId);
  if(step===2){
    for(let i=0;i<(o.draft.guardians||[]).length;i++){
      const input=byId(`po_g${i}_phone`);
      if(!input) continue;
      const country=val(`po_g${i}_phone_country`)||mpsOnboardingPhoneCountry(caseId,o.draft.guardians[i]);
      const phone=mpsOptionalNormalisePhone(input.value,country);
      if(!phone.ok){alert(`Guardian ${i+1}: ${phone.error}`);return false}
      if(phone.value) input.value=phone.value;
    }
  }
  if(step===3){
    const input=byId('po_em_phone');
    if(input){
      const country=val('po_em_phone_country')||mpsOnboardingPhoneCountry(caseId,o.draft.emergency);
      const phone=mpsNormalisePhone(input.value,country);
      if(!phone.ok){alert(`Emergency contact: ${phone.error}`);return false}
      input.value=phone.value;
    }
  }
  return true;
}

const _mpsBq092ContactBaseSyncOnboarding=syncOnboarding;
syncOnboarding=function(caseId,step){
  const before=ensureOnboarding(caseId).draft;
  const guardianBefore=step===2?(before.guardians||[]).map(g=>({phone:g.phone||'',phoneCountry:g.phoneCountry||''})):[];
  const emergencyBefore=step===3?{phone:before.emergency?.phone||'',phoneCountry:before.emergency?.phoneCountry||''}:null;

  _mpsBq092ContactBaseSyncOnboarding(caseId,step);
  const o=ensureOnboarding(caseId);
  const d=o.draft;

  if(step===2){
    (d.guardians||[]).forEach((g,i)=>{
      const country=val(`po_g${i}_phone_country`)||mpsOnboardingPhoneCountry(caseId,g);
      const phone=mpsOptionalNormalisePhone(g.phone,country);
      if(phone.ok){
        g.phone=phone.value;
        g.phoneCountry=country;
      }else{
        g.phone=guardianBefore[i]?.phone||'';
        g.phoneCountry=guardianBefore[i]?.phoneCountry||mpsOnboardingPhoneCountry(caseId,g);
      }
    });
    save();
  }

  if(step===3&&d.emergency){
    const country=val('po_em_phone_country')||mpsOnboardingPhoneCountry(caseId,d.emergency);
    const phone=mpsOptionalNormalisePhone(d.emergency.phone,country);
    if(phone.ok){
      d.emergency.phone=phone.value;
      d.emergency.phoneCountry=country;
    }else{
      d.emergency.phone=emergencyBefore?.phone||'';
      d.emergency.phoneCountry=emergencyBefore?.phoneCountry||mpsOnboardingPhoneCountry(caseId,d.emergency);
    }
    save();
  }
};

const _mpsBq092ContactBaseOnboardingNext=onboardingNext;
onboardingNext=function(caseId){
  const step=ui().parentOnboardingStep;
  if(!mpsValidateOnboardingContactStep(caseId,step)) return;
  return _mpsBq092ContactBaseOnboardingNext(caseId);
};

function mpsNormaliseStoredOnboardingContacts(caseId){
  const c=db.admissions?.[caseId];
  const d=c?.onboarding?.draft;
  if(!c||!d) return false;
  let authorisedPhone=false;
  for(let i=0;i<(d.guardians||[]).length;i++){
    const g=d.guardians[i];
    const country=mpsOnboardingPhoneCountry(caseId,g);
    const phone=mpsOptionalNormalisePhone(g.phone,country);
    if(!phone.ok){alert(`Guardian ${i+1}: ${phone.error}`);return false}
    g.phone=phone.value;
    g.phoneCountry=country;
    if(g.legalAuthority==='Yes'&&!!phone.value) authorisedPhone=true;
  }
  if(!authorisedPhone){alert('At least one authorised guardian must have the registered WhatsApp/mobile number.');return false}
  const emergencyCountry=mpsOnboardingPhoneCountry(caseId,d.emergency);
  const emergency=mpsNormalisePhone(d.emergency?.phone,emergencyCountry);
  if(!emergency.ok){alert(`Emergency contact: ${emergency.error}`);return false}
  d.emergency.phone=emergency.value;
  d.emergency.phoneCountry=emergencyCountry;
  if(d.guardians[0]?.phoneCountry) c.phoneCountry=d.guardians[0].phoneCountry;
  save();
  return true;
}

const _mpsBq092ContactBaseSubmitOnboarding=submitOnboarding;
submitOnboarding=function(caseId){
  if(!mpsNormaliseStoredOnboardingContacts(caseId)) return;
  return _mpsBq092ContactBaseSubmitOnboarding(caseId);
};

// Re-render so direct refresh uses the validated parent-form controls immediately.
render();
// BQ-094 hardening retained after BQ-096 deferred provider remote support.
// Keep the tenant Account Admin model correct without any MPS provider-support UI.

function mpsRetireLegacySystemAdminSample(){
  let changed=false;
  const legacy=db.staff?.accounts?.sajana;
  if(legacy&&legacy.username==='sajana.admin'){
    delete db.staff.accounts.sajana;
    changed=true;
  }
  if(db.personas?.sajana){delete db.personas.sajana;changed=true}
  if(ui().persona==='sajana'){ui().persona='anjali';changed=true}
  if(changed) save();
}

// The first authorised user receives Account Admin only as bootstrap. Once Account
// Admin has been transferred to another active account, migration must not silently
// grant it back to the original user on every render.
const _mpsAccountHardeningBaseMigrateAccountAdminModel=mpsMigrateAccountAdminModel;
mpsMigrateAccountAdminModel=function(){
  const initial=mpsAccount('anjali');
  const initialHadAdmin=!!initial?.bundles?.includes(MPS_ACCOUNT_ADMIN);
  const otherAdminsBefore=mpsActiveAccountAdmins().filter(a=>a.id!=='anjali').length;
  _mpsAccountHardeningBaseMigrateAccountAdminModel();
  if(initial&&!initialHadAdmin&&otherAdminsBefore>0&&initial.bundles.includes(MPS_ACCOUNT_ADMIN)){
    initial.bundles=initial.bundles.filter(b=>b!==MPS_ACCOUNT_ADMIN);
    mpsEnsurePersonaForAccount(initial);
    mpsEnsureLastAdminRecovery();
    save();
  }
};

// BQ-096 removed the simulated provider-support/View-as feature from the launch
// product. Clean any stale prototype state left by the short-lived BQ-095 build.
function mpsRemoveDeferredProviderSupportState(){
  let changed=false;
  const state=ui();
  const session=state.supportSession;
  if(session?.returnPersona&&mpsAccount(session.returnPersona)?.status==='active'){
    state.persona=session.returnPersona;
    changed=true;
  }
  if(Object.prototype.hasOwnProperty.call(state,'supportSession')){
    delete state.supportSession;
    changed=true;
  }
  if(Object.prototype.hasOwnProperty.call(db,'support')){
    delete db.support;
    changed=true;
  }
  if(changed) save();
}

const _mpsAccountHardeningBaseRender=render;
render=function(){
  mpsRetireLegacySystemAdminSample();
  mpsRemoveDeferredProviderSupportState();
  _mpsAccountHardeningBaseRender();
};

// Apply fixture retirement and stale-state cleanup immediately after all modules load.
render();
// BQ-097 — one optional Visit note, reused throughout Admissions.
// Keep Complete visit small and do not make staff classify the same conversation
// into separate note types.

function mpsMigrateSingleVisitNote(){
  let changed=false;
  Object.values(db.admissions||{}).forEach(c=>{
    if(!c?.tour) return;
    const legacy=String(c.tour.additionalInfo||'').trim();
    if(!legacy) return;
    const current=String(c.tour.note||'').trim();
    if(!current) c.tour.note=legacy;
    else if(current!==legacy&&!current.includes(legacy)) c.tour.note=`${current} · ${legacy}`;
    delete c.tour.additionalInfo;
    changed=true;
  });
  if(changed) save();
}

function mpsVisitNote(c){return String(c?.tour?.note||'').trim()}

const _mpsVisitNoteBaseOverview=admissionOverview;
admissionOverview=function(c){
  let html=_mpsVisitNoteBaseOverview(c);
  if(c?.tour?.status!=='completed') return html;
  const visitNote=mpsVisitNote(c);
  if(!visitNote) return html;
  const applicationRow=kv('Application',applicationSummary(c));
  return html.replace(applicationRow,`${kv('Visit note',esc(visitNote))}${applicationRow}`);
};

const _mpsVisitNoteBaseApplication=admissionApplication;
admissionApplication=function(c){
  let html=_mpsVisitNoteBaseApplication(c);
  // BQ-089's older Application view emitted an empty case-specific row even when
  // nothing was recorded. The one-note model keeps only useful recorded content.
  html=html.replace(kv('Additional information','None recorded — this is optional and case-specific.'),'');
  html=html.replace(kv('Case-specific information','Not required by default'),'');
  return html;
};

const _mpsVisitNoteBaseModalView=modalView;
modalView=function(m){
  const n=m?.name,d=m?.data||{};
  if(n==='complete-tour'){
    const c=db.admissions[d.caseId];
    if(!c) return _mpsVisitNoteBaseModalView(m);
    return modal('Complete visit','Record the visit outcome.',
      `${selectField('Outcome',['Family wants to proceed','Follow-up needed','Family not proceeding'],c.tour?.outcome||'Family wants to proceed','tour_outcome')}${textArea('Visit note (optional)',c.tour?.note||'','tour_note')}`,
      `${btn('Cancel','closeOverlay()','secondary')}${btn('Save outcome',`completeTour('${c.id}')`,'primary')}`);
  }
  return _mpsVisitNoteBaseModalView(m);
};

completeTour=function(id){
  const c=db.admissions[id];
  if(!c?.tour) return;
  const outcome=val('tour_outcome');
  const note=val('tour_note').trim();
  c.tour.status='completed';
  c.tour.outcome=outcome;
  c.tour.note=note;
  delete c.tour.additionalInfo;
  if(outcome==='Family not proceeding') c.closed={type:'Withdrawn',reason:'Family not proceeding'};
  const details=[outcome,note].filter(Boolean).join(' · ');
  addEvent(id,'tour','Visit completed',details);
  closeOverlay();
};

mpsMigrateSingleVisitNote();
render();
// Operational Simplicity — remove explanatory copy that does not help staff finish a task.
// Keep safety warnings, validation guidance, irreversible-action consequences and genuine
// decision guidance. Remove commentary that explains the product, the prototype, or the
// absence of features instead of helping with the work in front of the user.

const MPS_UNNECESSARY_EXPLAINER_TEXTS = Object.freeze([
  'No parent account required.',
  'Manual WhatsApp records Sent only — not Delivered or Read.',
  "This application only confirms the basic details needed to review your child's application. If your child is enrolled, we'll send a separate secure New Family Onboarding form before their first day for family, emergency, pickup and Health information.",
  'If your child is enrolled, the separate New Family Onboarding form will collect the remaining family, emergency, authorised pickup, Health, communication and consent information.',
  'This application only asks for the information needed for the admissions decision. Pickup, Health, documents and consent will be collected later if the child enrols.',
  'We have filled in information already provided during admissions. Complete or confirm the remaining family details.',
  'The parent application is shown together with information already recorded during admissions.',
  'A history of what has happened with this family.',
  'Phone is checked for reliable matching. Email is optional.',
  'This is the preschool’s configured admission fee.',
  'The family details are already here.',
  'MPS will use the accepted class, start date and family details already recorded.',
  'Every extension, waiver or release requires an explicit reason and is retained in the case history.',
  'There is nothing for staff to load. Holiday labels are reference context only and never change the operating status by themselves.',
  'Production source/provider selection remains a later technical decision. This prototype proves the review-and-confirm workflow only.',
  'This prototype uses an illustrative expiry to prove that the link is time-limited; exact production expiry is a later security/technical setting.',
  'Your preschool’s own notes stay separate from the curriculum wording.',
  'Your changes are saved as your preschool’s notes, separate from the curriculum wording.',
  'MPS suggests relevant observations from teaching records.',
  'When sent manually, MPS records only “Sent”.',
  'Use your MPS username and password to sign in. Your verified recovery mobile is used only when you need to recover access.',
  'A work email is optional. MPS does not require staff to have corporate email addresses.',
  'The staff member verifies their recovery mobile from My profile. Work email is not required.',
  'Operational settings stay in their own workspaces. Calendar opening changes, Billing work and teaching settings do not belong here.',
  'You have Account Admin access only. Operational child, teaching, Admissions, Billing and Health information is not included automatically.',
  'Your role cannot review parent Health updates or change Health records.',
  'This calendar entry does not change opening hours or create a lesson plan.',
  'No business rule is being invented here.',
  'This interaction has no specific view.',
  'The displayed prototype expiry demonstrates that the link is time-limited; the exact production expiry is a later security/technical setting.',
  'Secure Application · no MPS account required',
  'New Family Onboarding · secure link · no parent account'
]);

const MPS_UNNECESSARY_EXPLAINER_KV_LABELS = Object.freeze([
  'Parent account',
  'Account required',
  'Prototype reference',
  'Prototype dataset'
]);

const MPS_UNNECESSARY_COPY_AUDIT_COUNT =
  MPS_UNNECESSARY_EXPLAINER_TEXTS.length + MPS_UNNECESSARY_EXPLAINER_KV_LABELS.length;

const MPS_OPERATIONAL_COPY_REPLACEMENTS = Object.freeze([
  ['No administrations recorded in this prototype state.','No administrations recorded.'],
  ['No incidents recorded in this prototype state.','No incidents recorded.'],
  ['No DOB-derived birthdays are available in this prototype state.','No birthdays available.'],
  ['No separate contact detail recorded in this prototype case','No contact note recorded'],
  ['time-limited prototype link','time-limited link']
]);

const _mpsExplainerBasePlainLanguageHtml = mpsPlainLanguageHtml;
mpsPlainLanguageHtml = function(html){
  let out = _mpsExplainerBasePlainLanguageHtml(html);
  MPS_OPERATIONAL_COPY_REPLACEMENTS.forEach(([from,to])=>{out=out.split(from).join(to)});
  // Remove audited explainer fragments at the HTML boundary as well as at the DOM
  // boundary. This catches old modules that combine a redundant sentence with a later
  // useful sentence in the same notice without deleting the useful sentence.
  MPS_UNNECESSARY_EXPLAINER_TEXTS.forEach(text=>{out=out.split(text).join('')});
  return out;
};

function mpsNormaliseUiText(text){
  return String(text||'').replace(/\s+/g,' ').trim();
}

function mpsPruneUnnecessaryExplainers(root){
  if(!root) return;
  const removeTexts = new Set(MPS_UNNECESSARY_EXPLAINER_TEXTS.map(mpsNormaliseUiText));
  root.querySelectorAll('p,.notice,.sub,small').forEach(el=>{
    const text=mpsNormaliseUiText(el.textContent);
    if(!text || removeTexts.has(text)) el.remove();
  });
  root.querySelectorAll('.kv').forEach(row=>{
    const key=row.querySelector('.k');
    if(key && MPS_UNNECESSARY_EXPLAINER_KV_LABELS.includes(mpsNormaliseUiText(key.textContent))) row.remove();
  });
}

const _mpsExplainerAuditRender = render;
render = function(){
  _mpsExplainerAuditRender();
  mpsPruneUnnecessaryExplainers(document.getElementById('root'));
  mpsPruneUnnecessaryExplainers(document.getElementById('overlay'));
};

render();
// Operational Simplicity — second copy audit: every sentence must earn its place for the person doing the job.
// A sentence stays only when it helps someone act, decide, avoid a mistake, understand a consequence,
// recover access, or keep a child safe. Product narration and implementation commentary stay underneath.

const MPS_TASK_PURPOSE_REMOVALS = Object.freeze([
  'One clear admission journey. Choose a stage, open a family, and do the next real job.',
  'Keep the Admissions record aligned with the real conversation.',
  'Keep the visit on the same admission record.',
  'Record the visit outcome.',
  'Keep the application active without pretending a place has been accepted.',
  'Record the real non-conversion reason.',
  'The family chose to withdraw before enrolment.',
  'Reuse the accepted Application; do not create the family again.',
  'Enrolment reuses the accepted placement and the existing Admissions history.',
  'The parent submission is now part of this same admission record.',
  'A familiar month calendar for operating days and important preschool context. What you can see still follows your existing permissions.',
  'Operating truth and contextual items stay separate.',
  'MPS provides the configured Sri Lankan public/Poya reference dates automatically.',
  'Open any other area available to this staff member.',
  'These records are already organised by child and mapped learning-area context.',
  'Activity and learning-area context are inherited from Today.',
  'Evidence is organised automatically from normal teaching records.',
  'Evidence candidates are generated from teaching records.',
  'Parent-friendly evidence — not a technical scoring grid.',
  'Manual delivery records Sent only. MPS never guesses Delivered/Read.',
  'Keep it factual and lightweight.',
  'Issued snapshot / draft lines, payments and audit history.',
  'Only DRAFT invoices can be changed freely.',
  'Deleting a photo is separate from deciding whether it can be used publicly.',
  'Basic settings for this preschool workspace.',
  'Disabling access never deletes attribution.',
  'Official learning-area mapping, MPS summary and teacher adaptation remain distinct.'
]);

const MPS_TASK_PURPOSE_REPLACEMENTS = Object.freeze([
  [
    'Review each candidate below. The detailed comparison is shown one candidate at a time so it stays easy to read on desktop and mobile. A shared guardian phone may legitimately belong to siblings; MPS never merges automatically.',
    'Review each possible match. A shared guardian phone may belong to siblings, so confirm the child before closing the enquiry as a duplicate.'
  ],
  [
    'MPS flagged this candidate because of the same registered guardian phone. Only actual matching fields are marked below; a family-contact match may still belong to a sibling or another child. Staff makes the identity decision.',
    'Matching fields are marked below. A shared family contact may belong to a sibling or another child, so confirm the child before closing the enquiry.'
  ],
  [
    'If this is the same child/person, close the incoming enquiry as a duplicate against this record. If it is not the same child/person, clear this candidate; MPS then moves to the next unresolved match.',
    'Same child/person: close this enquiry as a duplicate. Different child/person: clear this match and continue.'
  ],
  [
    'The secure application link is active. Staff can resend it without leaving this family record.',
    'Waiting for the parent to submit the application.'
  ],
  [
    'Create the enrolment from the accepted application; do not retype the family.',
    'Admission fee is complete. Create the enrolment.'
  ],
  [
    'Parent onboarding and staff review live here; safety readiness is separate from non-critical checklist completion.',
    'Complete the required safety information before the child starts.'
  ],
  [
    'Set the actual operating state. Special occasions belong in Events, not in the operating status.',
    'For celebrations or reminders, use Add event instead.'
  ],
  [
    'Events explain what is happening; they do not change operating status.',
    'Use this for celebrations, reminders and other important dates.'
  ],
  [' · materials and curriculum context already carried forward.',''],
  ['Why this is lightweight','Evidence & progress'],
  [
    'No lesson transcription. No compulsory full-class scoring. One delivery outcome, then only evidence worth keeping.',
    'Review observations and assessments recorded from teaching.'
  ],
  [
    'Choose a reusable activity; the selected activity will actually be added to this week.',
    'Choose an activity to add to this week.'
  ],
  [
    'The adaptation is local teacher/preschool text; it is not represented as official source wording.',
    'Add your teaching notes without changing the curriculum wording.'
  ],
  [
    'Only where evidence genuinely exists.',
    'Record an assessment only when you observed enough to judge it.'
  ],
  [
    'Use observations and assessments to prepare the monthly report. The Head Teacher approves it before it is sent.',
    'Review the evidence, add the teacher note, and approve the report before sending.'
  ],
  [
    'Drafts can be edited before issue. Later charges never rewrite an issued invoice.',
    'You can edit this draft until it is issued.'
  ],
  [
    'One person, one MPS account. Add only the access this person actually needs.',
    'Give this person only the access they need.'
  ],
  [
    'One account can hold several responsibilities without role switching.',
    'Choose the access this person needs.'
  ]
]);

const MPS_TASK_PURPOSE_AUDIT_COUNT = MPS_TASK_PURPOSE_REMOVALS.length + MPS_TASK_PURPOSE_REPLACEMENTS.length;

const _mpsTaskPurposeBasePlainLanguageHtml = mpsPlainLanguageHtml;
mpsPlainLanguageHtml = function(html){
  let out = _mpsTaskPurposeBasePlainLanguageHtml(html);
  MPS_TASK_PURPOSE_REPLACEMENTS.forEach(([from,to])=>{ out=out.split(from).join(to); });
  MPS_TASK_PURPOSE_REMOVALS.forEach(text=>{ out=out.split(text).join(''); });
  return out;
};

// Calendar's earlier compatibility layer used the old explanatory subtitle as a string anchor
// when adding the ordinary staff "Add calendar entry" action. The subtitle is now deliberately
// gone, so keep the approved action structurally rather than depending on wording.
const _mpsTaskPurposeRenderCalendar = renderCalendar;
renderCalendar = function(){
  let html = _mpsTaskPurposeRenderCalendar();
  if(html.includes('Add calendar entry')) return html;
  const headStart = html.indexOf('<div class="page-head">');
  if(headStart < 0) return html;
  const closePair = html.indexOf('</div></div>', headStart);
  if(closePair < 0) return html;
  const insertAt = closePair + '</div>'.length;
  const action = `<div class="page-actions">${btn('Add calendar entry',`openModal('calendar-event',{date:'${TODAY}'})`,'primary')}</div>`;
  return html.slice(0,insertAt) + action + html.slice(insertAt);
};

// Install the stricter copy layer immediately so a refresh and Reset render the same UI.
render();
// BQ-094 refinement — useful preschool context in the staff header.
// Replace the generic workspace subtitle with the current preschool date/time,
// calculated from the preschool timezone configured in Preschool settings.

function mpsPreschoolClockTimezone(){
  const configured=String(db.organization?.timezone||'Asia/Colombo');
  try{
    new Intl.DateTimeFormat('en-GB',{timeZone:configured}).format(new Date());
    return configured;
  }catch(_err){
    return 'Asia/Colombo';
  }
}

function mpsPreschoolClockText(now=new Date()){
  const timeZone=mpsPreschoolClockTimezone();
  const dateText=new Intl.DateTimeFormat('en-GB',{
    timeZone,
    weekday:'long',
    day:'numeric',
    month:'long'
  }).format(now);
  const timeText=new Intl.DateTimeFormat('en-US',{
    timeZone,
    hour:'numeric',
    minute:'2-digit',
    hour12:true
  }).format(now);
  return `${dateText} · ${timeText}`;
}

function mpsPreschoolClockHtml(){
  const timeZone=mpsPreschoolClockTimezone();
  return `<span id="mps-preschool-clock" data-timezone="${esc(timeZone)}">${esc(mpsPreschoolClockText())}</span>`;
}

function mpsRefreshPreschoolClock(){
  const clock=document.getElementById('mps-preschool-clock');
  if(!clock)return;
  const timeZone=mpsPreschoolClockTimezone();
  clock.dataset.timezone=timeZone;
  clock.textContent=mpsPreschoolClockText();
}

const _mpsPreschoolClockBaseShell=shell;
shell=function(content){
  let html=_mpsPreschoolClockBaseShell(content);
  html=html.replace('<span>Preschool workspace</span>',mpsPreschoolClockHtml());
  return html;
};

if(window.__mpsPreschoolClockTimer) clearInterval(window.__mpsPreschoolClockTimer);
window.__mpsPreschoolClockTimer=setInterval(mpsRefreshPreschoolClock,30000);

// Re-render once so the first visible frame uses the preschool clock.
render();
// Owner review — page-heading simplicity.
// Small eyebrow labels should add context, not repeat the page title or expose
// an internal product/domain label that does not help staff finish the job.

function mpsHeadingText(value){
  return String(value||'').replace(/\s+/g,' ').trim();
}

function mpsSimplifyPageHeadings(root){
  if(!root) return;
  root.querySelectorAll('.page-head').forEach(head=>{
    const eyebrow=head.querySelector('.eyebrow');
    const title=head.querySelector('h2');
    if(!eyebrow||!title) return;

    const eye=mpsHeadingText(eyebrow.textContent);
    const heading=mpsHeadingText(title.textContent);

    // Daycare covers the whole daycare workspace (including Standard and
    // Extended Daycare). "Extended care" wrongly makes the page sound like it
    // covers only one service. "Today" adds useful operational context instead.
    if(heading==='Daycare'&&eye==='Extended care'){
      eyebrow.textContent='Today';
      return;
    }

    const redundantPair=
      (eye==='Organisation calendar'&&heading==='Calendar')||
      (eye==='Organisation'&&heading==='Staff & access');

    if(eye.toLowerCase()===heading.toLowerCase()||redundantPair){
      eyebrow.remove();
    }
  });
}

const _mpsPageHeadingRender=render;
render=function(){
  _mpsPageHeadingRender();
  mpsSimplifyPageHeadings(document.getElementById('root'));
};

render();
// Rendered-interface copy audit — review actual staff-facing states, not only known source phrases.
// Presentation only: no business state, permission, workflow or safety rule changes.
const MPS_RENDERED_COPY_AUDIT_REMOVALS = Object.freeze([
  'Contact the parent/guardian and record the real outcome. Do not assume continuing interest from the enquiry alone.',
  'Use only when staff later confirms that this established Admissions record is a duplicate of another record.',
  'Detailed guardian, pickup, Health, documents, consents and other pre-start information remains in New Family Onboarding unless a particular fact is genuinely needed for this admissions decision.',
  'Billing records and verifies the payment. Admissions shows the latest payment status.',
  'Tap any date above for its operating status and the context you are allowed to see.',
  'Calendar is viewable by all staff, but operating-day changes remain restricted to Head Teacher / authorised administration.',
  'Context is reused from its source and remains separate from operating status.',
  'Useful context only. Nothing here automatically creates a curriculum activity or compulsory lesson.',
  'Shown here because it matters while caring for this child.',
  'This calendar entry does not change opening hours or create a lesson plan.',
  'It does not change opening hours or create a lesson plan.',
  'Record what the parent said.',
  'If the family wants to continue, you can schedule a Visit now or arrange it later.',
  'Check the programme, class and start date before accepting.',
  'Activity and learning area are filled in for you.',
  'Check in several children quickly.',
  'Invoice details, payments and history.',
  'Add the appointment or item people need to know about.',
  'Choose the access this person needs.'
]);

const MPS_RENDERED_COPY_AUDIT_REPLACEMENTS = Object.freeze([
  ['Use the whole From admissions for the decision — not only the parent form.','Review the admissions notes and parent application together.'],
  ['Pre-start work begins after Enrolment. Accepted is not Enrolled.','Available after enrolment.'],
  ['Only dates that differ from the automatic weekly schedule. Restored dates fall back to the baseline while their history is kept.','Only changes from the regular weekly schedule are shown here.'],
  ['Record what the family says was paid. It remains Pending Verification until an authorised real-source check.','Payment stays pending until it is verified.'],
  ['Attachment is optional. Verification against the real bank/cash source is still required.','Attachment is optional and does not verify the payment.'],
  ['An attachment can help, but verify the payment against the actual bank, cash or payment record.','An attachment alone does not verify the payment.'],
  ['Choose the surviving record. MPS preserves this record and its history, removes it from the active pipeline, and links it durably to the survivor.','Choose the record to keep. This record will be linked to it and removed from the active Admissions list.'],
  ['This is not an ordinary lost lead and does not delete either history.','Both histories are kept.'],
  ['MPS has flagged the late pickup. Review it before any charge is sent to Billing.','Review the late pickup before sending any charge to Billing.'],
  ['Account Admin manages MPS accounts and basic preschool settings. It does not automatically grant access to Admissions, Billing, Health, teaching or other preschool work.','Account Admin manages accounts and preschool settings only. Add other access separately.'],
  ['Record family withdrawal','Family withdrew'],
  ['Record withdrawal','Family withdrew'],
  ['Mark Admissions record as duplicate','Mark as duplicate'],
  ['Surviving record','Record to keep'],
  ['Record contact outcome','Update enquiry']
]);

const _mpsRenderedCopyAuditBase = mpsPlainLanguageHtml;
mpsPlainLanguageHtml = function(html){
  let out=_mpsRenderedCopyAuditBase(html);
  MPS_RENDERED_COPY_AUDIT_REPLACEMENTS.forEach(([from,to])=>{out=out.split(from).join(to)});
  MPS_RENDERED_COPY_AUDIT_REMOVALS.forEach(text=>{out=out.split(text).join('')});
  out=out.replace(/Automatic weekly schedule for this date: ([^.]+)\. Choosing that same status restores the automatic schedule instead of keeping a redundant exception\./g,'Regular schedule for this date: $1. Choosing it removes the exception.');
  return out;
};

render();
// Owner review — compact rare record-management action.
// Marking an established Admissions record as a duplicate is a rare case-level action.
// Keep the action accessible, but place it after the case information rather than beside the section heading.

function mpsCompactEstablishedDuplicateAction(html){
  if(!html || !html.includes('Record management') || !html.includes('Mark as duplicate')) return html;

  const managementCard=/<div class="card" style="margin-top:12px"><div class="card-header"><div class="grow"><h3>Record management<\/h3>(?:<p>[\s\S]*?<\/p>)?<\/div>(<button[^>]*>Mark as duplicate<\/button>)<\/div><\/div>/;
  const match=html.match(managementCard);
  if(!match || match.index===undefined) return html;

  const duplicateButton=match[1];
  const before=html.slice(0,match.index);
  const after=html.slice(match.index+match[0].length);
  const detailsHeadingIndex=before.lastIndexOf('<h3>Admission details</h3>');
  const detailsCloseIndex=before.lastIndexOf('</div>');

  if(detailsHeadingIndex<0 || detailsCloseIndex<detailsHeadingIndex) return html;

  const footer=`<div class="admission-record-actions" style="display:flex;justify-content:flex-end;margin-top:12px;padding-top:12px;border-top:1px solid var(--line)">${duplicateButton}</div>`;
  return `${before.slice(0,detailsCloseIndex)}${footer}${before.slice(detailsCloseIndex)}${after}`;
}

const _mpsCompactRecordManagementOverview=admissionOverview;
admissionOverview=function(c){
  return mpsCompactEstablishedDuplicateAction(_mpsCompactRecordManagementOverview(c));
};

render();
