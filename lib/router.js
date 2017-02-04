Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
  waitOn: function() { return Meteor.subscribe('posts'); }
});
//  路径“/” postsList 路由。
Router.route('/',{
	name: 'postsList',

});
Router.route('/posts/:_id', {
  name: 'postPage',
  data: function() { return Posts.findOne(this.params._id); }
});

//在postPage路由中，如果data（数据）是空的话，显示“无法找到”的页面。？？
Router.onBeforeAction('dataNotFound', {only: 'postPage'});