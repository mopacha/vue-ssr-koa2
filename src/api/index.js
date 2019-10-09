import request from '@/util/request'

const data = [
    { id: 0, text: '推荐', attr: '' },
    { id: 1, text: '前端', attr: '/frontend' },
    { id: 2, text: 'Andriod', attr: '/Andriod' },
    { id: 3, text: '后端', attr: '/backend' },
    { id: 4, text: '人工智能', attr: '/ai' },
    { id: 5, text: 'IOS', attr: '/IOS' },
    { id: 6, text: '工具资源', attr: '/freebie' },
    { id: 7, text: '阅读', attr: '/article' },
    { id: 8, text: '运维', attr: '/devops' }]

const delay = (resfun, timer) => setTimeout(() => resfun(), timer)

// 首页tag
export const fetchIndexTags = () => new Promise((resolve, reject) => delay(() => resolve(data), 200))


/*export const fetchRecommendByType = (type) => {
	let params = {
			suid: 'nvfBZaZ2jjZyffaZqJAN',
			ab: 'welcome_3',
			src: 'web'
	}
	return request.api.get('/recommender/get_recommended_entry', {
			params
	}).then(res => res.d)
}*/

const recommendData=[
	{
		"collectionCount": 4,
		"commentsCount": 1,
		"gfw": false,
		"objectId": "590ff2322f301e0057dc9a53",
		"subscribersCount": 1,
		"ngxCachedTime": 1516963223,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 0.42422419529517
		},
		"tags": [
			{
				"title": "腾讯",
				"ngxCached": true,
				"ngxCachedTime": 1516963189,
				"id": "55e836ff60b2fb7557a464cf"
			},
			{
				"title": "微信小程序",
				"ngxCached": true,
				"ngxCachedTime": 1516963115,
				"id": "57ea2013a22b9d006164c1f8"
			},
			{
				"title": "微信",
				"ngxCached": true,
				"ngxCachedTime": 1516963193,
				"id": "55b9036700b0cecc83240cb7"
			}
		],
		"entryView": "5910051444d904007beed7ee",
		"rankIndex": 0.000044726535716285,
		"author": "",
		"category": {
			"ngxCached": true,
			"title": "article",
			"id": "5562b428e4b00c57d9b94b9d",
			"name": "阅读",
			"ngxCachedTime": 1516963220
		},
		"originalUrl": "https://zhuanlan.zhihu.com/p/26693839",
		"buildTime": 1516264686.3909,
		"original": false,
		"user": {
			"community": {
				"weibo": {
					"nickname": "kalasoo",
					"avatar_url": "http://tva1.sinaimg.cn/crop.0.0.512.512.180/5ef54d60jw8f0rsyzztzyj20e80e874o.jpg",
					"uid": "1593134432",
					"description": "Crazy monster! http://ming.today"
				},
				"wechat": {
					"username": "阴明 - 掘金小册",
					"avatarLarge": "http://wx.qlogo.cn/mmopen/vi_32/t0SgynmSKLflfUwaQZnXQhN4WrZIagia4iaxVg3lga4snicFbGoibNrsIjU2KHcyJbMqEdb9EXUOJnyhAuDoVpkexQ/132",
					"uid": "oDv1Ew7y6zCYA6rf-tP-nRGi7_oY"
				},
				"github": {
					"company": "XITU",
					"uid": "1555092",
					"blogAddress": "https://www.ming.today",
					"username": "kalasoo",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/1555092?v=4"
				}
			},
			"collectedEntriesCount": 934,
			"company": "掘金",
			"ngxCached": true,
			"followeesCount": 381,
			"role": "admin",
			"jobTitle": "搬砖",
			"isAuthor": true,
			"postedEntriesCount": 705,
			"subscribedTagsCount": 63,
			"objectId": "551d677ee4b0cd5b623f49cb",
			"postedPostsCount": 17,
			"viewedEntriesCount": 35681,
			"username": "阴明",
			"totalCommentsCount": 1836,
			"ngxCachedTime": 1516963137,
			"totalCollectionsCount": 27391,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2018/1/26/16130b27165cf9f6?w=1125&h=1125&f=png&s=669077",
			"followersCount": 37942
		},
		"type": "article",
		"screenshot": "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png",
		"lastCommentTime": "2017-05-08T16:18:40.472Z",
		"content": "腾讯官方讲解微信小程序二维码",
		"hotIndex": 294.3873,
		"title": "扫码1",
		"createdAt": "2017-05-08T04:21:06.110Z",
		"updatedAt": "2018-01-18T08:38:06.389Z",
		"english": false,
		"hot": false,
		"viewsCount": 247
	}
]


const typeData=[
	{
		"collectionCount": 4,
		"commentsCount": 1,
		"gfw": false,
		"objectId": "590ff2322f301e0057dc9a53",
		"subscribersCount": 1,
		"ngxCachedTime": 1516963223,
		"recommenderInfo": {
			"filtered": true,
			"source": "total",
			"score": 0.42422419529517
		},
		"tags": [
			{
				"title": "腾讯",
				"ngxCached": true,
				"ngxCachedTime": 1516963189,
				"id": "55e836ff60b2fb7557a464cf"
			},
			{
				"title": "微信小程序",
				"ngxCached": true,
				"ngxCachedTime": 1516963115,
				"id": "57ea2013a22b9d006164c1f8"
			},
			{
				"title": "微信",
				"ngxCached": true,
				"ngxCachedTime": 1516963193,
				"id": "55b9036700b0cecc83240cb7"
			}
		],
		"entryView": "5910051444d904007beed7ee",
		"rankIndex": 0.000044726535716285,
		"author": "",
		"category": {
			"ngxCached": true,
			"title": "article",
			"id": "5562b428e4b00c57d9b94b9d",
			"name": "阅读",
			"ngxCachedTime": 1516963220
		},
		"originalUrl": "https://zhuanlan.zhihu.com/p/26693839",
		"buildTime": 1516264686.3909,
		"original": false,
		"user": {
			"community": {
				"weibo": {
					"nickname": "kalasoo",
					"avatar_url": "http://tva1.sinaimg.cn/crop.0.0.512.512.180/5ef54d60jw8f0rsyzztzyj20e80e874o.jpg",
					"uid": "1593134432",
					"description": "Crazy monster! http://ming.today"
				},
				"wechat": {
					"username": "阴明 - 掘金小册",
					"avatarLarge": "http://wx.qlogo.cn/mmopen/vi_32/t0SgynmSKLflfUwaQZnXQhN4WrZIagia4iaxVg3lga4snicFbGoibNrsIjU2KHcyJbMqEdb9EXUOJnyhAuDoVpkexQ/132",
					"uid": "oDv1Ew7y6zCYA6rf-tP-nRGi7_oY"
				},
				"github": {
					"company": "XITU",
					"uid": "1555092",
					"blogAddress": "https://www.ming.today",
					"username": "kalasoo",
					"avatarLarge": "https://avatars0.githubusercontent.com/u/1555092?v=4"
				}
			},
			"collectedEntriesCount": 934,
			"company": "掘金",
			"ngxCached": true,
			"followeesCount": 381,
			"role": "admin",
			"jobTitle": "搬砖",
			"isAuthor": true,
			"postedEntriesCount": 705,
			"subscribedTagsCount": 63,
			"objectId": "551d677ee4b0cd5b623f49cb",
			"postedPostsCount": 17,
			"viewedEntriesCount": 35681,
			"username": "阴明",
			"totalCommentsCount": 1836,
			"ngxCachedTime": 1516963137,
			"totalCollectionsCount": 27391,
			"avatarLarge": "https://user-gold-cdn.xitu.io/2019/10/8/16da9681eb3e369d?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1",
			"followersCount": 37942
		},
		"type": "article",
		"screenshot": "https://www.joyent.com/assets/products/node-support/header.svg",
		"lastCommentTime": "2017-05-08T16:18:40.472Z",
		"content": "腾讯官方讲解微信小程序二维码",
		"hotIndex": 294.3873,
		"title": "扫码2",
		"createdAt": "2017-05-08T04:21:06.110Z",
		"updatedAt": "2018-01-18T08:38:06.389Z",
		"english": false,
		"hot": false,
		"viewsCount": 247
	}
]



export const fetchRecommendByType = () => new Promise((resolve, reject) => delay(() => resolve(recommendData), 200))
export const fetchEntriesByType = () => new Promise((resolve, reject) => delay(() => resolve(typeData), 200))


// 首页list
/*export const fetchEntriesByType = (type) => {
    let category = ''
    switch (type) {
        case 'frontend':
            category = '5562b415e4b00c57d9b94ac8'
            break
        case 'Andriod':
            category = '5562b410e4b00c57d9b94a92'
            break
        case 'backend':
            category = '5562b419e4b00c57d9b94ae2'
            break
        case 'ai':
            category = '57be7c18128fe1005fa902de'
            break
        case 'IOS':
            category = '5562b405e4b00c57d9b94a41'
            break
        case 'freebie':
            category = '5562b422e4b00c57d9b94b53'
            break
        case 'article':
            category = '5562b428e4b00c57d9b94b9d'
            break
        case 'devops':
            category = '5b34a478e1382338991dd3c1'
    }
    let params = {
        category: category,
        ab: 'welcome_3',
        before: Math.random(),
        src: 'web'
    }
    
    return request.api.get('/timeline/get_entry_by_rank', {
        params
    }).then(res => res.d.entrylist)
}*/

