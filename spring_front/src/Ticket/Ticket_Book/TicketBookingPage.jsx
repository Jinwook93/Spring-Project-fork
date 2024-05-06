// use navigate 쓸 수 있을 때 각 Airport, Bus, Train에 연결시키기

import React, { useState } from 'react';
//import LoginBox from '../../User/LoginBox'; // 로그인 박스 컴포넌트

const TicketBookingPage = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [quickPassword, setQuickPassword] = useState('');
  const [termsAgreed1, setTermsAgreed1] = useState(false);
  const [termsAgreed2, setTermsAgreed2] = useState(false);
  const [isOver14, setIsOver14] = useState(false);

  const handleNonMemberSubmit = (e) => {
    e.preventDefault();
    if (!termsAgreed1 || !isOver14 || !termsAgreed2) {
      alert("약관 동의 및 연령 확인이 필요합니다.");
      return;
    }
    console.log('비회원 예매 정보:', { email, fullName, phoneNumber, quickPassword });
    // 예매 정보 서버로 전송 로직 추가
  };

  return (
    <div className="ticket-booking-page">
      <LoginBox onLogin={(username, password) => console.log(username, password)}/>
      <div className="terms-section">
        <h2>이용약관 동의</h2>
        <h5>개인정보 보호를 위한 이용자 동의사항</h5>
        <textarea readOnly>
수집하는 개인정보 항목 및 수집 방법
회사는 다음의 개인정보 항목을 처리하고 있습니다.

필수항목 : 카드번호, 생년월일, 핸드폰번호, IP 주소

(1) 인터넷 서비스 이용과정에서 아래의 개인정보 항목이 자동으로 생성되어 수집될 수 있습니다.
① IP 주소
(2) 계약에 필요한 사항
① 카드번호, 생년월일, 핸드폰번호

회사는 다음과 같은 방법으로 개인정보를 수집하고 있습니다.
(1) 이용자의 인터넷 이용 시 자동으로 생성되는 정보의 수집
(2) 예약 진행 및 예약 취소시 수집

개인정보의 수집 및 이용 목적
회사는 다음과 같은 목적을 위하여 개인정보를 수집하며, 해당 목적 내에서만 수집한 개인정보를 이용하고 있습니다.
(1) 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른 요금정산, 컨텐츠 제공, 특정 맞춤 서비스 제공, 구매 및 요금 결제, 요금추심

(2) 모니터링 시스템을 통한 서비스 품질 관리
개인정보의 보유 및 이용기간
고객의 개인정보는 원칙적으로 개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다. 단, 다음의 정보에 대해서는 아래의 이유로 명시한 기간 동안 보존합니다.
(1) 관련법령에 의한 정보보유 사유
① 계약 또는 청약철회, 대금결제 및 재화 등의 공급에 관한 기록: 5년 (전자상거래 등에서의 소비자보호에 관한 법률)


원하지 않는 경우 개인정보 수집 및 이용에 동의하지 않을 수 있습니다. 이러한 경우 예매 서비스를 제공받으실 수 없음을 알려드립니다.
        </textarea>
        <div>
          <input
            type="checkbox"
            checked={termsAgreed1}
            onChange={() => setTermsAgreed1(!termsAgreed1)}
          />
          <label>약관에 동의합니다.</label>
        </div>

        <h5>인터넷 이용약관</h5>
        <textarea readOnly>
제1장 총칙
제1조 (목적)
이 약관은 ㈜이동의즐거움이 제공하는 시외버스 승차권 통합 예약/예매/안내 사이트에서 제공하는 제반 서비스의 이용과 관련하여 회사와 고객의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 한다.

제2조 (용어의 정의)
① "회사"란 재화나 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신 설비를 이용하여 재화 또는 용역을 거래할 수 있도록 구성한 인터넷상의 영업공간을 만들고, 그 영업공간을 운영하는 사업자를 말합니다.
② "www.bustago.or.kr"란 회사가 재화나 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신 설비를 이용하여 재화 또는 용역을 거래할 수 있도록 구성한 인터넷상의 영업공간을 말합니다.
③ "이용자"란 이 약관에 따라 "www.bustago.or.kr"가 제공하는 서비스를 이용하는 자를 말합니다.
④ "결제"란 이용자가 "www.bustago.or.kr" 서비스 이용을 위해 결제수단으로 일정금액을 지불하는 행위를 말합니다.
⑤ "환불"이란 이용자가 결제한 내역에 대해 취소 요청을 하는 경우 결제한 금액을 이용자에게 돌려주는 행위를 말합니다.

제3조 (약관의 게시와 개정)
① 회사는 약관의 내용과 상호, 영업소 소재지, 대표자의 성명, 사업자 등록번호, 연락처(전화, 팩스, 전자우편 주소 등) 등을 이용자가 쉽게 확인할 수 있도록 "www.bustago.or.kr" 초기 서비스화면에 게시하거나 기타의 방법으로 이용자에게 공지합니다.
② 회사는 「약관의 규제에 관한 법률」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」 등 관련법을 위반하지 않는 범위에서 이 약관을 개정할 수 있습니다.
③ 개정약관은 그 적용일자 이후에 체결되는 계약에만 적용되고, 그 이전에 체결된 계약에 대해서는 개정 전의 약관이 적용됩니다.
④ 이 약관에 정하지 아니한 사항과 이 약관의 해석에 관하여는 「전자거래기본법」, 「전자거래소비자보호지침」 및 관계법령 또는 상관례에 따릅니다.

제4조 (이용계약 체결)
- 이용계약은 이용자의 약관동의, 이용신청, 회사의 승낙에 의하여 체결됩니다.
- 회사는 다음 각 호의 1에 해당하는 경우에는 이용신청을 승낙하지 아니할 수 있습니다.

1. 서비스 관련 설비의 용량이 부족한 경우
2. 기술상 장애 사유가 있는 경우
3. 본인의 실명으로 신청하지 아니한 경우
4. 이용신청 시 필요 내용을 허위로 기재하여 신청한 경우
5. 공공질서 또는 건전한 미풍약속을 저해할 우려가 있는 경우
6. 기타 회사가 필요하다고 인정한 경우

제5조 (서비스의 제공 및 변경)
① 회사는 특별한 사유가 없는 한 "www.bustago.or.kr"가 제공하는 서비스를 항시 이용할 수 있도록 합니다.
② 회사는 기술적 사양의 변경 또는 기타 불가피한 여건이나 사정 등이 있는 경우에는 장차 체결되는 계약에 의해 제공할 서비스의 내용을 변경할 수 있습니다.
이 경우에는 변경된 서비스의 내용 및 제공일자를 명시하여 이용자에게 공지합니다. 단, 제6조 1항의 사유에 해당하는 경우에는 공지하지 않을 수 있습니다.

제6조 (서비스의 중단)
① 회사는 다음 각 호의할 수 1에 해당하는 경우 서비스의 전부 또는 일부를 제한하거나 중단 있습니다
1. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
2. 고객이 회사의 영업활동을 방해하는 경우
3. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
4. 서비스 제공업자와의 계약 종료 등과 같은 회사의 제반 사정으로 서비스를 유지할 수 없는 경우
5. 기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우
② 제1항의 서비스의 제한 또는 중단의 경우에는 내용 및 일자를 이용자에게 공지합니다. 단, 회사가 통제할 수 없는 사유로 인한 서비스의 중단 등 사전 통지가 불가능한 경우에는 공지하지 않을 수 있습니다.
③ 회사는 회사의 고의 또는 과실이 없는 서비스의 제한 또는 중단으로 인하여 발생하는 문제에 대해서는 어떠한 책임도 지지 않습니다.

제3장 계약 당사자의 의무
제7조 (회사의 의무)
① 회사는 법령과 이 약관이 금지하거나 공공질서, 미풍양속에 반하는 행위를 하지 않으며, 이 약관이 정하는 바에 따라 지속적이고 안정적으로 재화 및 용역을 제공하는데 최선을 다하여야 합니다.
② 회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함) 보호를 위한 보안 시스템을 갖추어야 합니다.
③ 회사가 상품이나 용역에 대하여 「표시•광고의 공정화에 관한 법률」 제3조 소정의 부당한 표시 또는 광고행위를 함으로써 이용자가 손해를 입은 때에는 이를 배상할 책임을 집니다.
④ 회사는 이용자가 원하지 않는 영리목적의 광고성 전자 우편을 발송하지 않습니다.

제8조 (이용자의 의무)
① 이용자는 관계법령, 이 약관의 규정, 이용안내 등 회사가 통지하는 사항을 준수하여야 하며, 기타 회사의 업무에 방해되는 행위를 해서는 안됩니다.
② 이용자는 서비스의 일부로 보내지는 회사의 전자우편을 받는 것에 동의합니다.
③ 이용자는 서비스 이용과 관련하여 다음 각 호의 행위를 해서는 안됩니다.
1. 서비스 신청 또는 변경 시 허위내용의 등록
2. "www.bustago.or.kr"에 게시된 정보의 허가 받지 않은 변경
3. 회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등)의 송신 또는 게시
4. 회사 기타 제3자의 저작권 등 지적 재산권에 대한 침해
5. 회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위
6. 외설 또는 폭력적인 메시지, 화상, 음성 기타 공공질서 미풍양속에 반하는 정보를 "www.bustago.or.kr"에 공개 또는 게시하는 행위
7. 기타 방송통신심의위원회의 시정을 요구 받는 행위

제4장 결재관련 의무
제9조 (결제수단)
홈페이지에서 구매하는 재화 또는 용역에 대한 결제수단은 신용카드 또는 기타 회사가 추가로 정의하는 결제수단입니다.

제10조 (결제내용)
① 홈페이지에서 승차권 예매 시 예매 수수료는 없습니다.
② 홈페이지에서 승차권 예매 시 신용카드 결제는 인터넷 예매시점에 이루어집니다.

제5장 서비스의 이용
제11조 (서비스 이용시간)
① 서비스 이용시간은 회사의 업무상 또는 기술상 특별한 지장이 없는 한 연중무휴 1일 24시간을 원칙으로 합니다. 다만 정기점검 등의 필요로 회사가 정한 날이나 시간은 제외됩니다.
② 회사는 서비스를 일정범위로 분할하여 각 범위별로 이용가능 시간을 별도로 정할 수 있습니다. 이 경우 그 내용을 이용자에게 사전에 공지합니다.

제12조 (서비스 이용책임)
① 이용자는 회사에서 권한 있는 사원이 서명한 명시적인 서면에 의해 구체적으로 허용한 경우를 제외하고는 서비스를 이용하여 상품을 판매하는 영업활동을 할 수 없으며, 특히 해킹, 도박•음란 사이트 등을 통한 상업행위, 상용S/W 불법 배포 등을 할 수 없습니다.
② 회사는 이용자가 본조 제1항을 어기고 발생한 영업활동의 결과 및 관계기관에 의한 사법조치 등에 대해서는 책임을 지지 않습니다.

제13조 (정보의 제공)
회사는 이용자가 서비스 이용 중 필요하다고 인정되는 다양한 정보에 대해서 전자우편 또는 서신우편 등의 방법으로 회원에게 제공할 수 있습니다.

제14조 (게시물의 삭제)
회사는 이용자가 게시하거나 등록하는 서비스의 내용물이 다음 각 항의 1에 해당한다고 판단되는 경우에는 사전통지 없이 삭제할 수 있습니다.
① 다른 회원 또는 제3자를 비방하거나 명예를 손상시키는 내용인 경우
② 공공질서 및 미풍양속에 위반되는 내용을 기재하거나 인터넷 사이트를 링크하는 경우
③ 범죄적 행위에 결부된다고 인정되는 경우
④ 회사의 저작권, 제3자의 저작권 등의 권리를 침해하는 내용인 경우
⑤ 기타 관계법령에 위반된다고 판단되는 경우

제15조 (게시물의 저작권)
① 게시물에 대한 권리와 책임은 게시자에게 있으며, 회사는 게시자의 동의 없이는 이를 사이트 내 게재 이외의 영리목적으로 사용할 수 없습니다.
② 이용자는 서비스를 이용하여 얻은 정보를 가공, 판매하는 행위 등 서비스에 게재된 자료를 상업적으로 사용할 수 없습니다.

제16조 (이용자에 대한 통지)
① 회사가 이용자에 대한 통지를 하는 경우 이용자가 회사에 제출한 전자우편 주소로 할 수 있습니다.
② 회사는 불특정다수 이용자에 대한 통지의 경우 1주일 이상 사이트에 게시함으로써 개별 통지에 갈음할 수 있습니다.

제6장 취소 및 환불
제17조 (취소, 환불)
① 예매한 승차권의 취소는 운송약관에 명시된 내용에 따릅니다.
② 예매 및 취소의 마감 시간 기준은 "www.bustago.or.kr" 해당 터미널의 사정에 따라 다를 수 있습니다.
③ 전항의 예매 및 취소의 마감 시간은 버스회사, 터미널 등 관련기관의 사정에 의해 변경될 수 있습니다.
예매한 승차권의 취소 시 취소시점에 따라 수수료가 부과될 수 있습니다.
④ 승차권을 예매하고 터미널에서 해당 승차권을 발권한 후 또는 해당 차량이 출발한 이후의 환불에 대하여는 운송약관의 규정에 따라 수수료가 부과될 수 있습니다.
⑤ 기타 본 약관 및 이용안내에 규정되지 않은 환불 및 취소에 대한 사항 및 수수료의 적용에 대해서는 「소비자 피해보상규정」에 따릅니다.

제18조 (수수료의 처리)
① 예매 취소 시에는 승인된 내역에 취소 금액을 차감 후 남은 금액에 대하여 수수료를 부과합니다.
② 환불금액의 환급 방법과 환급일은 예매 취소 시점과 해당 신용카드사의 환불 처리기준에 따라 다소 차이가 있을 수 있으며, 보다 상세한 환불 정책에 대해서는 회사 또는 해당 신용카드사로 문의하시기 바랍니다.

제7장 기타
제19조 (저작권의 귀속 및 이용제한)
① 회사가 작성한 저작물에 대한 저작권 기타 지적재산권은 회사에 귀속합니다.
② 이용자는 홈페이지를 통해 얻은 정보를 회사의 사전 승낙 없이 복제, 송신, 출판, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 하여서는 안됩니다.

제20조 (분쟁 해결)
① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상하기 위해 피해보상처리기구를 설치, 운영합니다.
② 회사는 이용자가 제기하는 의견이나 불만을 신속하게 처리합니다. 단, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 통보합니다.
③ 회사와 이용자 간에 발생한 분쟁은 「전자거래기본법」에 의하여 설치된 전자거래 분쟁조정위원회의 조정에 따를 수 있습니다.

제21조 (면책조항)
회사는 다음 각 항의 1에 해당하는 경우에는 책임을 지지 않습니다.
① 회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상하기 위해 피해보상처리기구를 설치, 운영합니다.
② 회사는 이용자가 제기하는 의견이나 불만을 신속하게 처리합니다. 단, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 통보합니다.
③ 회사와 이용자 간에 발생한 분쟁은 「전자거래기본법」에 의하여 설치된 전자거래 분쟁조정위원회의 조정에 따를 수 있습니다.

제22조 (관할 법원)
홈페이지와 관련된 분쟁에 대해 소송이 제기될 경우 회사의 본사 소재지를 관할하는 법원을 전속 관할법원으로 합니다.

부칙&lt;2010.6.1&gt
① 이 약관은 2010년 6월 1일부터 시행합니다.
        </textarea>
        <div>
          <input
            type="checkbox"
            checked={termsAgreed2}
            onChange={() => setTermsAgreed2(!termsAgreed2)}
          />
          <label>약관에 동의합니다.</label>
        </div>
        <div>
          <input
            type="checkbox"
            checked={isOver14}
            onChange={() => setIsOver14(!isOver14)}
          />
          <label>만 14세 이상입니다.</label>
        </div>
      </div>
      <div className="non-member-booking">
        <h2>비회원 예매 확인</h2>
        <form onSubmit={handleNonMemberSubmit}>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일"/>
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="이름"/>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder="전화번호"/>
          <input type="password" value={quickPassword} onChange={(e) => setQuickPassword(e.target.value)} placeholder="간편 비밀번호"/>
          <button type="submit">조회하기</button>
        </form>
      </div>
    </div>
  );
};

export default TicketBookingPage;
