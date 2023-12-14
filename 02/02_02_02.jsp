	<!-- 차트 생성을 위한 JS 영역 -->
	<script type="text/javascript" src="../data/dashboard/js/amchart/core.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/charts.js"></script>
	<script type="text/javascript" src="../data/dashboard/js/amchart/animated.js"></script>
  <script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	<script type="text/javascript" src="./js/visualization/chart_02.js"></script>


<!-- 서브 콘텐츠::02_02_통계시각화 -->
            <!-- <h2 class="sub_cont_title"></h2> -->
            
            
            <!-- 탭메뉴_1deps -->
            <div class="visual_menu_btn_area dep1 flex_r_ss flex_wrap tab_style_RS">
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="0" data-tab="chart_box_01" onclick="location.href='content.do?cmsid=101020201000'">인구·교육</button>
              <button class="btn visual_menu_btn_tab act" data-depth="0" data-idx="1" data-tab="chart_box_02" onclick="location.href='content.do?cmsid=101020202000'">보건·복지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="2" data-tab="chart_box_03" onclick="location.href='content.do?cmsid=101020203000'">경제·산업</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="3" data-tab="chart_box_04" onclick="location.href='content.do?cmsid=101020204000'">환경·녹지</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="4" data-tab="chart_box_05" onclick="location.href='content.do?cmsid=101020205000'">교통·안전</button>
              <button class="btn visual_menu_btn_tab" data-depth="0" data-idx="5" data-tab="chart_box_06" onclick="location.href='content.do?cmsid=101020206000'">관광·문화</button>
            </div>

            <div class="sub_cont_inner visual_tab_wrap visual_tab_area">
              
              <!-- 탭메뉴_2deps -->
              
              <!-- 02_보건·복지 --------------------------------------------------------------------------------->
              <div id="chart_box_02" class="visual_menu_content_area content_area dep1_cont act" data-depth="0" data-idx="1">
                <div class="visual_tab_area">
                  <div class="visual_menu_btn_area dep2 flex_r_ss flex_wrap">
                    <button class="btn visual_menu_btn_tab act" data-depth="1" data-idx="0" data-tab="chart_box_02_01">의료기관 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="1" data-tab="chart_box_02_02">의료기관종사 의료인력</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="2" data-tab="chart_box_02_03">노인복지시설 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="3" data-tab="chart_box_02_04">장애인복지시설 현황</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="4" data-tab="chart_box_02_08">국민연금 지급자수</button>
                    <button class="btn visual_menu_btn_tab" data-depth="1" data-idx="5" data-tab="chart_box_02_07">국민연금 지급금액</button>
                  </div>
                  
                  <!-- 02_보건·복지차트 ------------------------------------------------------------------------>
                  <!-- 02_01_의료기관현황 ---------------------------------------------------------------->
                  <div id="chart_box_02_01" class="visual_menu_content_area content_area dep2_cont act" data-depth="1" data-idx="0">
                    <h2 class="sub_cont_sub_title">의료기관 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 개소</p>
                    </div>
                    <div class="chart clear flex_r_ss flex_wrap">
                      <div class="wd_half">
                        <dl>
                          <dt>의료기관</dt>
                          <dd>
                            <div id="chart_02_01" class="population_graph03">
                              <!--차트영역-->
                            </div>
                          </dd>
                        </dl>
                      </div>
                      <div class="wd_half map_area">
                        <dl>
                          <dt>행정구별 의료기관 현황(기관수 총계)</dt>
                          <dd>
                            <ul>
                              <li class="deokjin"><span>덕진구</span><strong>639</strong></li>
                              <li class="wansan"><span>완산구</span><strong>849</strong></li>
                            </ul>
                          </dd>
                        </dl>
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「건강보험통계」국민건강보험공단
                    </div>
                  </div>

                  <!-- 02_02_의료기관종사 의료인력 ---------------------------------------------------------------->
                  <div id="chart_box_02_02" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="1">
                    <h2 class="sub_cont_sub_title">의료기관종사 의료인력</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2022-12</p>
                      <p>단위 : 명</p>
                    </div>

                    <div class="chart clear">
                      <div id="chart_02_02" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「건강보험통계」국민건강보험공단
                    </div>
                  </div>

                  <!-- 02_03_노인복지시설 현황 ---------------------------------------------------------------->
                  <div id="chart_box_02_03" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="2">
                    <h2 class="sub_cont_sub_title">노인복지시설 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 개소</p>
                    </div>
                    <div class="chart" >
                    <!-- <div class="chart" style="overflow:hidden; overflow-x:scroll;"> -->
                      <div id="chart_02_03" class="chart_height">
                      <!-- <div style="width:2100px;" id="chart_02_03" class="chart_height"> -->
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「노인복지시설현황」보건복지부 요양보험운영과
                    </div>
                  </div>

                  <!-- 02_04_장애인복지시설 현황 ---------------------------------------------------------------->
                  <div id="chart_box_02_04" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="3">
                    <h2 class="sub_cont_sub_title">장애인복지시설 현황</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 개소</p>
                    </div>
                    <div class="chart">
                      <div id="chart_02_04" class="chart_height">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「장애인복지시설알림표」보건복지부
                    </div>
                  </div>

                  <!-- 02_08_국민연금 지급자수 ---------------------------------------------------------------->
                  <div id="chart_box_02_08" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="4">
                    <h2 class="sub_cont_sub_title">국민연금 지급자수</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 명</p>
                    </div>
                    <div class="chart">
                      <div id="chart_02_08" class="chart_height extend_h">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「국민연금통계」국민연금공단 기획조정실
                    </div>
                  </div>

                  <!-- 02_07_국민연금 지급금액 ---------------------------------------------------------------->
                  <div id="chart_box_02_07" class="visual_menu_content_area content_area dep2_cont" data-depth="1" data-idx="5">
                    <h2 class="sub_cont_sub_title">국민연금 지급금액</h2>
                    <div class="visual_menu_info_area flex_r_ec">
                      <p>기준 : 2021-12</p>
                      <p>단위 : 원</p>
                    </div>
                    <div class="chart">
                      <div id="chart_02_07" class="chart_height extend_h">
                        <!--차트영역-->
                      </div>
                    </div>
                    <div class="visual_menu_source_area">
                      <span>출처 : </span>「국민연금통계」국민연금공단 기획조정실
                    </div>
                  </div>  

                </div>
              </div>

            </div>