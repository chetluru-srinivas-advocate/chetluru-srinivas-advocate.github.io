import { notFound } from 'next/navigation';
import AdvocateProfileClient from '../../../components/AdvocateProfileClient';
import lawFirmContent from '../../../data/law_firm_content.json';

export const dynamic = "force-static";

export async function generateStaticParams() {
  const advocates = lawFirmContent?.advocates || [];
  return advocates.map((advocate) => ({
    slug: advocate.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
  }));
}

export async function generateMetadata({ params }) {
  const advocate = lawFirmContent?.advocates?.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );
  if (!advocate) {
    return { title: 'Team Member Not Found' };
  }
  return {
    title: `${advocate.name} - ${advocate.title} | Chetluru Srinivas & Associates`,
    description: advocate.bio || `${advocate.name} is a ${advocate.title} at Chetluru Srinivas & Associates with ${advocate.experienceYears || advocate.industryExperienceYears || ''} of legal experience.`,
  };
}

export default async function TeamMemberPage({ params }) {
  const advocate = lawFirmContent?.advocates?.find(
    (member) => member.name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') === params.slug
  );
  if (!advocate) notFound();
  return <AdvocateProfileClient advocate={advocate} />;
}
