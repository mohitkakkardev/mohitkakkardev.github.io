import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph } from '../../styles';
import { WorkItem, WorkTitle, JobTitle } from './styles';

const Work = ({ user }) => {
  return (
    <Layout user={user}>
      <div>
        <SectionTitle>Work</SectionTitle>
        <ul>
          {user.work.map((work, i) => (
            <WorkItem key={i}>
              <WorkTitle>{work.position}</WorkTitle>
              <div>
                {(work.url) ? <a href={work.url} target="_blank"><JobTitle>{work.company}</JobTitle></a> : <JobTitle>{work.company}</JobTitle>}
                <span> &nbsp; </span>
                <span>{work.location}</span>
                <span> &sdot; </span>
                <span>
                  {work.start.year} to {(work.end.year) ? work.end.year : "Present"}
                </span>
              </div>
              {work.summary && <br/>}
              <Paragraph>{work.summary}</Paragraph>
            </WorkItem>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Work;