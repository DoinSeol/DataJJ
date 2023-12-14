// 통계DB팝업_조회및다운로드

function popStatisticsDB(idValue)
{
  var url = "https://stat.kosis.kr/nsieu/view/tree.do?task=branchView&hOrg=711&id=" + idValue;
  window.open(url,"pop","width=900,height=500,scrollbars=yes");
}