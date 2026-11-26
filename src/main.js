const now = Date.now();
const minsAgo = n => now - n * 60000;
const spaces = [
  {id:'ENG2_RM302_1',name:'제2공학관 302호',type:'빈 강의실',status:'relaxed',walk:2,updated:minsAgo(3),remaining:'13:30까지 이용 가능',floor:'3층',seats:'약 24석',outlet:'창가 및 뒷벽 다수',tags:['OUTLET','LAPTOP','QUIET','WALK_5MIN'],tagLabels:['콘센트 다수','노트북 작업','조용해요'],note:'창가 쪽 자리가 넉넉해요',next:'13:30 회로이론'},
  {id:'ENG_LOUNGE_01',name:'공학관 1층 학생라운지',type:'단과대 라운지',status:'normal',walk:1,updated:minsAgo(4),remaining:'상시 이용 가능',floor:'1층',seats:'약 18석',outlet:'벽면 콘센트 일부',tags:['OUTLET','LAPTOP','WALK_5MIN'],tagLabels:['콘센트 일부','노트북 작업','대화 가능'],note:'테이블석 2자리 남아 있어요'},
  {id:'LIBRARY_2F_01',name:'중앙도서관 2층 라운지',type:'도서관 라운지',status:'crowded',walk:4,updated:minsAgo(7),remaining:'상시 이용 가능',floor:'2층',seats:'잔여 3석',outlet:'좌석별 콘센트',tags:['OUTLET','LAPTOP','QUIET','WALK_5MIN'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'창가석은 거의 찼어요'},
  {id:'STUDENT_CAFE_01',name:'학생회관 느티나무 카페',type:'교내 카페',status:'relaxed',walk:5,updated:minsAgo(2),remaining:'상시 이용 가능',floor:'1층',seats:'여유 좌석 많음',outlet:'카운터 옆 콘센트',tags:['OUTLET','LAPTOP','WALK_5MIN'],tagLabels:['콘센트','노트북 작업','대화 가능'],note:'안쪽 테이블 자리가 여유로워요'},
  {id:'ENG1_RM204_1',name:'제1공학관 204호',type:'빈 강의실',status:'relaxed',walk:3,updated:minsAgo(12),remaining:'14:00까지 이용 가능',floor:'2층',seats:'약 32석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP','QUIET','WALK_5MIN'],tagLabels:['콘센트 다수','노트북 작업','조용해요'],note:'현재 수업이 없는 강의실',next:'14:00 전자회로'},
  {id:'LIBRARY_READING_01',name:'중앙도서관 노트북 열람실',type:'도서관 열람실',status:'normal',walk:5,updated:minsAgo(1),remaining:'잔여 좌석 12석',floor:'4층',seats:'잔여 12석',outlet:'전 좌석 콘센트',tags:['OUTLET','LAPTOP','QUIET','WALK_5MIN'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'키보드 사용 가능 구역'},
  {id:'DESIGN_LOUNGE_01',name:'디자인관 2층 라운지',type:'단과대 라운지',status:'relaxed',walk:6,updated:minsAgo(8),remaining:'상시 이용 가능',floor:'2층',seats:'약 14석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP','QUIET'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'넓은 공용 테이블 이용 가능'},
  {id:'SOCIAL_CAFE_01',name:'사회과학관 북카페',type:'교내 카페',status:'normal',walk:7,updated:minsAgo(6),remaining:'상시 이용 가능',floor:'1층',seats:'약 10석',outlet:'창가 콘센트',tags:['OUTLET','LAPTOP','QUIET'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'조용히 읽기 좋은 분위기'},
  {id:'ENG2_RM105_1',name:'제2공학관 105호',type:'빈 강의실',status:'normal',walk:3,updated:minsAgo(9),remaining:'15:00까지 이용 가능',floor:'1층',seats:'약 40석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP','WALK_5MIN'],tagLabels:['콘센트 다수','노트북 작업'],note:'넓은 책상이 있어요',next:'15:00 프로그래밍언어'},
  {id:'GYM_LOUNGE_01',name:'학생회관 휴게 라운지',type:'휴게 공간',status:'relaxed',walk:5,updated:minsAgo(3),remaining:'상시 이용 가능',floor:'2층',seats:'소파 8석',outlet:'콘센트 일부',tags:['OUTLET','QUIET','WALK_5MIN'],tagLabels:['콘센트 일부','휴식하기 좋아요'],note:'소파 자리가 넉넉해요'},
  {id:'SCIENCE_CAFE_01',name:'자연과학관 카페테리아',type:'교내 카페',status:'crowded',walk:8,updated:minsAgo(11),remaining:'상시 이용 가능',floor:'1층',seats:'잔여 2석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP'],tagLabels:['콘센트','노트북 작업'],note:'점심시간이라 붐벼요'},
  {id:'LIBRARY_1F_LOUNGE',name:'중앙도서관 1층 로비',type:'도서관 라운지',status:'normal',walk:4,updated:minsAgo(5),remaining:'상시 이용 가능',floor:'1층',seats:'약 20석',outlet:'기둥 옆 콘센트',tags:['OUTLET','LAPTOP','WALK_5MIN'],tagLabels:['콘센트 일부','노트북 작업'],note:'대화 가능한 열린 공간'},
  {id:'HUMANITIES_RM302',name:'인문관 302호',type:'빈 강의실',status:'relaxed',walk:9,updated:minsAgo(13),remaining:'14:30까지 이용 가능',floor:'3층',seats:'약 28석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP','QUIET'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'복도 끝이라 한적해요',next:'14:30 글쓰기'},
  {id:'STUDENT_FOOD_LOUNGE',name:'학생식당 창가 라운지',type:'휴게 공간',status:'normal',walk:5,updated:minsAgo(4),remaining:'상시 이용 가능',floor:'2층',seats:'약 12석',outlet:'콘센트 일부',tags:['OUTLET','LAPTOP','WALK_5MIN'],tagLabels:['콘센트 일부','노트북 작업'],note:'식사 시간 이후 이용 추천'},
  {id:'MEDIA_LOUNGE_01',name:'미디어관 오픈 라운지',type:'단과대 라운지',status:'relaxed',walk:10,updated:minsAgo(36),remaining:'상시 이용 가능',floor:'1층',seats:'약 16석',outlet:'벽면 콘센트',tags:['OUTLET','LAPTOP','QUIET'],tagLabels:['콘센트','노트북 작업','조용해요'],note:'넓은 테이블에서 작업 가능'}
];
const state = {filters:new Set(), query:'', selected:null, reportStatus:'', outlet:false, manualLocation:'제1공학관 인근', userPosition:null, maxVisible:6, sort:'near', classroomsOnly:false};
const $ = s => document.querySelector(s);
const list = $('#spaceList');
const statusText = {relaxed:'여유',normal:'보통',crowded:'혼잡'};
const filterNames = {OUTLET:'콘센트',LAPTOP:'노트북 작업',WALK_5MIN:'도보 5분 이내',QUIET:'조용한 개인 학습'};

function timeAgo(timestamp){const n=Math.max(0,Math.floor((Date.now()-timestamp)/60000)); return n<1?'방금 전':`${n}분 전 갱신`;}
function getFiltered(){return spaces.filter(s=>{
  if([...state.filters].some(f=>!s.tags.includes(f)))return false;
  if(state.filters.size && !['relaxed','normal'].includes(s.status))return false;
  if(state.classroomsOnly && !s.type.includes('강의실'))return false;
  if(state.query && !s.name.toLowerCase().includes(state.query.toLowerCase()))return false;
  if(state.filters.has('WALK_5MIN') && s.walk>5)return false;
  return true;
}).sort((a,b)=>state.sort==='near'?a.walk-b.walk:({relaxed:0,normal:1,crowded:2}[a.status]-{relaxed:0,normal:1,crowded:2}[b.status]));}
function cardTemplate(s,i){return `<article class="space-card" tabindex="0" role="button" data-id="${s.id}" aria-label="${s.name} 상세 보기">
  ${i===0&&state.filters.size?'<div class="recommended-ribbon">BEST MATCH <span>✦</span></div>':''}
  <div class="card-main"><div class="type-icon ${s.type.includes('강의실')?'classroom':s.type.includes('도서관')?'library':s.type.includes('카페')?'cafe':'lounge'}">${s.type.includes('강의실')?'▤':s.type.includes('도서관')?'▥':s.type.includes('카페')?'☕':'⌂'}</div><div class="card-info"><div class="card-eyebrow">${s.type}<span class="eyebrow-dot">·</span> ${s.floor}</div><h3>${s.name}</h3><div class="card-detail"><span class="walk-time"><b>↗</b> 도보 ${s.walk}분</span><span class="detail-divider"></span><span>${s.remaining}</span></div></div><span class="status-badge ${s.status}"><i></i>${statusText[s.status]}</span></div>
  <div class="card-bottom"><div class="tag-row">${s.tagLabels.slice(0,2).map(t=>`<span class="space-tag">${t}</span>`).join('')}</div><div class="card-fresh ${Date.now()-s.updated>1800000?'stale':''}"><span>↻</span> ${timeAgo(s.updated)}</div></div>
  ${s.note?`<div class="card-note"><span>✳</span> ${s.note}</div>`:''}
  </article>`;}
function render(){const found=getFiltered();$('#resultCount').textContent=found.length;$('#resultSubtitle').textContent=state.filters.size||state.query?`조건에 맞는 공간 ${found.length}곳을 찾았어요`:'가까운 순으로 모아봤어요';$('#filterNote').hidden=!state.filters.size;$('#filterNote').textContent=state.filters.size?`✓ ${[...state.filters].map(x=>filterNames[x]).join(' · ')} 조건 적용 중`:'';
  list.innerHTML=found.slice(0,state.maxVisible).map(cardTemplate).join('');$('#emptyState').hidden=found.length!==0;$('#loadMore').hidden=found.length<=state.maxVisible;document.querySelectorAll('.filter-chip').forEach(c=>c.classList.toggle('active',state.filters.has(c.dataset.filter)));document.querySelectorAll('.space-card').forEach(c=>{c.addEventListener('click',()=>openDetail(c.dataset.id));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openDetail(c.dataset.id)}})});}
function openDetail(id){state.selected=spaces.find(s=>s.id===id);state.reportStatus='';state.outlet=false;if(!state.selected)return;renderDetail();$('#modalBackdrop').hidden=false;document.body.classList.add('modal-open');}
function renderDetail(){const s=state.selected;$('#modalContent').innerHTML=`<div class="detail-cover ${s.type.includes('강의실')?'cover-classroom':'cover-lounge'}"><div class="cover-icon">${s.type.includes('강의실')?'▤':'⌂'}</div><span class="cover-type">${s.type}</span><span class="status-badge ${s.status}"><i></i>${statusText[s.status]}</span></div>
  <div class="detail-body"><div class="detail-title-row"><div><div class="card-eyebrow">${s.floor} <span class="eyebrow-dot">·</span> 공학 캠퍼스</div><h2 id="modalTitle">${s.name}</h2></div><span class="distance-bubble">↗ 도보 ${s.walk}분</span></div>
  <div class="detail-updated"><span>↻</span> ${timeAgo(s.updated)} <i></i> GPS 위치 확인됨</div>
  <div class="detail-stats"><div><small>이용 현황</small><strong>${s.seats}</strong></div><div><small>이용 가능 시간</small><strong>${s.remaining.replace('까지 이용 가능','까지')}</strong></div></div>
  <div class="detail-info"><div class="info-row"><span class="info-icon">ϟ</span><div><small>콘센트</small><strong>${s.outlet}</strong></div></div><div class="info-row"><span class="info-icon">▱</span><div><small>이용 안내</small><strong>${s.note||'편하게 이용해 주세요'}</strong></div></div>${s.next?`<div class="info-row"><span class="info-icon">◷</span><div><small>다음 수업</small><strong>${s.next}</strong></div></div>`:''}</div>
  <div class="report-inline"><div><strong>지금 이 공간은 어떤가요?</strong><p>도착 후 3초 제보로 학우들에게 알려주세요.</p></div><button id="openReport">제보하기 <span>→</span></button></div>
  <div class="detail-actions"><button class="secondary-action" id="detailReport">혼잡도 제보</button><button class="primary-action" id="goButton">여기로 이동하기 <span>↗</span></button></div>
  <div class="report-panel" id="reportPanel" hidden><div class="report-panel-head"><div><h3>지금 어떤가요?</h3><p>버튼 하나만 누르면 3초 만에 완료돼요.</p></div><span class="gps-verified">◎ 50m 이내 확인</span></div><div class="report-options">${['relaxed','normal','crowded'].map(x=>`<button class="report-option ${state.reportStatus===x?'selected':''} ${x}" data-status="${x}"><i></i><b>${statusText[x]}</b><small>${x==='relaxed'?'자리 많음':x==='normal'?'일부 착석':'거의 만석'}</small></button>`).join('')}</div><button class="outlet-toggle ${state.outlet?'checked':''}" id="outletToggle"><span class="toggle-icon">ϟ</span> 콘센트 자리 있음 <i></i></button><label class="memo-label">한 줄 메모 <span>선택 · 최대 30자</span></label><input class="memo-input" id="reportMemo" maxlength="30" placeholder="예: 창가 쪽 콘센트 자리 남아요" /><button class="submit-report" id="submitReport" ${state.reportStatus?'':'disabled'}>제보 제출하기</button></div>`;
  $('#openReport').onclick=()=>toggleReport();$('#detailReport').onclick=()=>toggleReport();$('#goButton').onclick=()=>{showToast(`${s.name}으로 이동을 시작해요`);closeDetail();};
  document.querySelectorAll('.report-option').forEach(b=>b.onclick=()=>{state.reportStatus=b.dataset.status;renderDetail();$('#reportPanel').hidden=false});$('#outletToggle').onclick=()=>{state.outlet=!state.outlet;$('#outletToggle').classList.toggle('checked',state.outlet)};$('#submitReport').onclick=submitReport;
}
function toggleReport(){const p=$('#reportPanel');p.hidden=!p.hidden;if(!p.hidden)p.scrollIntoView({behavior:'smooth',block:'nearest'});}
function submitReport(){if(!state.reportStatus)return;const s=state.selected;s.status=state.reportStatus;s.updated=Date.now();if(state.outlet&&!s.tagLabels.includes('콘센트 자리 있음'))s.tagLabels.unshift('콘센트 자리 있음');render();closeDetail();showToast('제보 완료! 덕분에 학우들이 헛걸음을 줄였어요');$('#lastUpdated').textContent='방금 전';}
function closeDetail(){$('#modalBackdrop').hidden=true;document.body.classList.remove('modal-open');}
let toastTimer;function showToast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.remove('show'),2600);}
function setLocation(name){state.manualLocation=name;$('#locationButton').innerHTML=`${name} <span>⌄</span>`;$('#distanceLabel').textContent=state.userPosition?'내 위치 기준 도보 거리':'도보 5분 거리';}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('.filter-chip');if(!b)return;const f=b.dataset.filter;state.filters.has(f)?state.filters.delete(f):state.filters.add(f);state.maxVisible=6;render();});
$('#resetFilters').onclick=$('#emptyReset').onclick=()=>{state.filters.clear();state.query='';state.classroomsOnly=false;$('#searchInput').value='';state.maxVisible=6;render()};$('#searchInput').addEventListener('input',e=>{state.query=e.target.value.slice(0,20);render()});$('#loadMore').onclick=()=>{state.maxVisible=spaces.length;render()};
$('#locationButton').onclick=()=>{const options=['제1공학관 인근','제2공학관 인근','중앙도서관 인근','학생회관 인근','디자인관 인근'];let idx=options.indexOf(state.manualLocation);setLocation(options[(idx+1)%options.length]);showToast(`기준 위치를 ${state.manualLocation}으로 바꿨어요`)};
$('#gpsButton').onclick=()=>{if(!navigator.geolocation){showToast('현재 있는 건물을 선택해 주세요');return;}navigator.geolocation.getCurrentPosition(pos=>{state.userPosition={lat:pos.coords.latitude,lon:pos.coords.longitude};setLocation('현재 위치');showToast('현재 위치를 기준으로 가까운 공간을 보여드려요');},()=>showToast('위치 정보를 불러올 수 없어요. 현재 있는 건물을 선택해 주세요.'),{enableHighAccuracy:true,timeout:7000});};
function refresh(){spaces.forEach(s=>{if(Date.now()-s.updated>1800000)s.updated=minsAgo(29)});$('#lastUpdated').textContent='방금 전';render();showToast('공간 정보를 새로고침했어요');}
$('#refreshButton').onclick=$('#mapRefresh').onclick=refresh;$('#classroomFilter').onclick=()=>{state.filters.clear();state.classroomsOnly=true;state.query='';$('#searchInput').value='';state.maxVisible=spaces.length;render();showToast('현재 이용 가능한 빈 강의실을 모아봤어요');};
$('#sortButton').onclick=()=>{state.sort=state.sort==='near'?'quiet':'near';$('#sortButton').innerHTML=state.sort==='near'?'⌁ <span>가까운 순</span>⌄':'✦ <span>여유로운 순</span>⌄';render()};
$('#closeModal').onclick=closeDetail;$('#modalBackdrop').addEventListener('click',e=>{if(e.target===$('#modalBackdrop'))closeDetail()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail();if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();$('#searchInput').focus()}});
setInterval(()=>{$('#lastUpdated').textContent='방금 전';document.querySelectorAll('.card-fresh').forEach(el=>{const card=el.closest('.space-card');const s=spaces.find(x=>x.id===card?.dataset.id);if(s)el.innerHTML=`<span>↻</span> ${timeAgo(s.updated)}`;});},30000);
render();
