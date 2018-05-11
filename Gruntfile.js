module.exports = function (grunt) {
	
	var con = grunt.option('config'); 
    var config = grunt.file.readJSON(con);

grunt.registerTask('generateInd',function(){
		grunt.file.copy('index.html', config.buildFolder + '/index.html',
		 {
		
			process: function(files) {
				return grunt.template.process(files,
					{
						data: {
							appName: config.appName
						}
					});

	   	 	}
		});
	});

grunt.registerTask('generatePage1',function(){
		grunt.file.copy('page1.html', config.buildFolder + '/page1.html',
		 {
		
			process: function(files) {
				return grunt.template.process(files,
					{
						data: {
							pageOneName: config.pageOneName
						}
					});

	   	 	}
		});
	});

grunt.registerTask('generatePage2',function(){
		grunt.file.copy('page2.html', config.buildFolder + '/page2.html',
		 {
		
			process: function(files) {
				return grunt.template.process(files,
					{
						data: {
							pageTwoName: config.pageTwoName
						}
					});

	   	 	}
		});
	});


grunt.registerTask('multitask', 
		['generateInd','generatePage1','generatePage2']);


}
