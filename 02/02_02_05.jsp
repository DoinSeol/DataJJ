	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_05.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->

              <!-- 05_교통·안전 --------------------------------------------------------------------------------->
              <div id="chart_box_05" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="4">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_05_01">자동차 등록</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_05_02">영업용 자동차 등록대수</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_05_03">도로현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_05_04">교통사고건수</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="4" data-tab="chart_box_05_05">화재발생</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="5" data-tab="chart_box_05_06">119 구급활동 실적</button>
                  </div>
                  
                  <!-- 05_교통·안전차트 ------------------------------------------------------------------------>
                  <!-- 05_01_자동차등록 ---------------------------------------------------------------->
                  <div id="chart_box_05_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">자동차 등록</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2023-10</p>
                      <p>단위 : 대</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_01" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>차량등록과,「자동차등록현황보고」국토교통통계누리
                    </div>
                  </div>

                  <!-- 05_02_영업용자동차등록대수 ---------------------------------------------------------------->
                  <div id="chart_box_05_02" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">영업용 자동차 등록대수</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 대</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_02" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>시민교통과
                    </div>
                  </div>

                  <!-- 05_03_도로현황 ---------------------------------------------------------------->
                  <div id="chart_box_05_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">도로현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : m</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_03" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「도로현황」국토교통부 도로운영과
                    </div>
                  </div>

                  <!-- 05_04_교통사고건수 ---------------------------------------------------------------->
                  <div id="chart_box_05_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">교통사고건수</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 건, 천원</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「교통사고상세통계」도로교통공단
                    </div>
                  </div>

                  <!-- 05_05_화재발생 ---------------------------------------------------------------->
                  <div id="chart_box_05_05" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="4">
                    <h2 class="sub_cont_sub_title">화재발생</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022</p>
                      <p>단위 : 건, 명, 천원</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_05" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>완산, 덕진 소방서
                    </div>
                  </div>

                  <!-- 05_06_119구급활동실적 ---------------------------------------------------------------->
                  <div id="chart_box_05_06" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="5">
                    <h2 class="sub_cont_sub_title">119 구급활동 실적</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 건, 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_05_06" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>완산, 덕진 소방서
                    </div>
                  </div>

                </div>
              </div>

            </div>