	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_06.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->

              <!-- 06_관광·문화 --------------------------------------------------------------------------------->
              <div id="chart_box_06" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="5">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_06_01">주요 관광지 관광객수</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_06_03">관광 사업체 등록 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_06_04">박물관/미술관 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_06_06">공공도서관 대출자료수/도서수현황</button>
                  </div>
                  
                  <!-- 06_관광·문화 ------------------------------------------------------------------------>
                  <!-- 06_01_주요관관지관광객수 ---------------------------------------------------------------->
                  <div id="chart_box_06_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">주요 관광지 관광객수</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-06</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_06_01" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「주요관광지점 입장객통계」문화체육관광부 관광정책과
                    </div>
                  </div>

                  <!-- 06_03_관광사업체등록현황 ---------------------------------------------------------------->
                  <div id="chart_box_06_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">관광 사업체 등록 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-06</p>
                      <p>단위 : 개소</p>
                    </div>
                    <div class="chart">
                      <div id="chart_06_03" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「전국관광사업체현황」한국관광협회중앙회
                    </div>
                  </div>

                  <!-- 06_04_박물관/미술관현황 ---------------------------------------------------------------->
                  <div id="chart_box_06_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">박물관/미술관 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-06</p>
                      <p>단위 : 개소</p>
                    </div>
                    <div class="chart">
                      <div id="chart_06_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>전통문화유산과
                    </div>
                  </div>

                  <!-- 06_06_공공도서관대출자료수/도서수현황 ---------------------------------------------------------------->
                  <div id="chart_box_06_06" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">공공도서관 대출자료수/도서수현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 권</p>
                    </div>
                    <div class="chart">
                      <div id="chart_06_06" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>도서관운영과
                    </div>
                  </div>

                </div>
              </div>

            </div>