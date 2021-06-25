<script>
	export default {
		onLaunch: function() {},
		onShow: function() {},
		onHide: function() {}
	}
</script>

<style lang="scss">
	@import "cl-uni/index.scss";

	/*每个页面公共css */
	page {
		background-color: $page-bg;
	}

	.form-box {
		background-color: $main-bg;
		border-bottom-left-radius: $card-radius;
		border-bottom-right-radius: $card-radius;
		box-shadow: $card-shadow;
		padding: 20rpx;
	}

	.contact-category,
	.contact-info {
		margin-right: 10rpx;
	}

	.contact-category {
		width: 26%;
		text-align: center;
	}

	.contact-info {
		width: 42%;
	}

	.card-box {
		padding: 0 20rpx;
		margin-top: 20rpx;

		.card {
			position: relative;
			margin-bottom: 20rpx;
		}
	}

	.band-header-fixed {
		z-index: 9;
		position: fixed;
		width: 100%;
		top: 0;
	}

	.bang-after-header {
		margin-top: 200rpx;
	}
</style>
