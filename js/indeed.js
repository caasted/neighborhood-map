var content = "<h4>Job Openings</h4>" +
	"<div id='indJobContent' class=''></div>" +
	"<a title='Job Search' href='http://www.indeed.com/'' " +
	"target='_new'>jobs by <img alt=Indeed " +
	"src='http://www.indeed.com/p/jobsearch.gif'></a>";

var indeedQuery = function( company ) {
	self.ind_pub = '9275408024451565';
	self.ind_el = 'indJobContent';
	self.ind_pf = '';
	self.ind_q = '"' + company + '" Virtual Reality Developer';
	self.ind_l = 'Mountain View, CA';
	self.ind_chnl = 'none';
	self.ind_n = 10;
	self.ind_d = 'http://www.indeed.com';
	self.ind_t = 40;
	self.ind_c = 30;	
	
	$.getScript('http://www.indeed.com/ads/jobroll-widget-v3.js')
}

