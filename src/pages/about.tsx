import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>About</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>About</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                Just a freelance dev who works on a bunch of different products and projects also a part time
		security researcher. I have worked for few small teams around the D.C. area and produced sites
		for a few small businesses and consulting with a few other for some custom projects. I got my 
		start as a junior dev taking after my mentor who is my godmother worked my way up by learning
		the basics and building small webpages for myself as a hobby and then working to making pages
		for my school. From there I moved further into the IT field and started working on automation
		scripts and small tools that I developed to help me working on my home file server and serve up
		videos and clips from a server and even host my own forums and anonymous imageboard.
              </p>
              <p>
                Vestibulum semper pretium ipsum nec congue. Ut ac eros nisi. Donec leo sem, aliquam
                mollis sapien ultrices, dapibus congue diam. Proin viverra dapibus blandit. Ut
                mauris tellus, tristique id felis vel, venenatis vestibulum nunc. Nam molestie
                pulvinar nibh, eget egestas augue. Maecenas tellus arcu, mattis ut ipsum non,
                sollicitudin convallis nunc. Donec nec neque tristique, aliquet lacus id, laoreet
                nunc. Cras dapibus nisi nulla, ullamcorper faucibus neque suscipit ac. Donec eget
                orci venenatis justo lobortis volutpat. Proin vel placerat nisl. Integer arcu nunc,
                sodales eu fringilla non, aliquam non diam. Cras placerat, massa et faucibus
                pretium, ante elit tincidunt tellus, tristique ultricies velit quam et massa.
              </p>
              <p>
                In nunc lacus, dapibus vitae lacus sit amet, efficitur iaculis neque. Suspendisse ut
                tellus quis leo vestibulum tincidunt. Aenean nec enim ac dolor lacinia semper. Ut
                sed laoreet libero. Nunc elementum sollicitudin accumsan. Nunc eu augue neque. Proin
                a tortor nibh. Cras eu nisl ornare sapien feugiat pellentesque. Mauris dignissim vel
                quam eu pellentesque. Integer sit amet posuere quam, eu ullamcorper odio. Nullam a
                lacus tempus sapien dignissim ullamcorper. In hac habitasse platea dictumst. Proin
                quis massa aliquam, feugiat tortor sit amet, tincidunt urna. Donec posuere pulvinar
                lectus, ac semper ipsum vulputate quis.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
