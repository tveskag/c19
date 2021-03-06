import { useContext } from 'react';
import PageLayout from '../components/PageLayout';
import contentFaq from '../content/faq';
import contentContributors from '../content/contributors';
import { LanguageContext } from '../components/LanguageSelector';
import ReactMarkdown from 'react-markdown';

export default function Faq() {
  const { language } = useContext(LanguageContext);
  const content = contentFaq[language];
  const contributors = contentContributors[language];
  return (
    <PageLayout>
      <div className="mx-auto">
        <h2 className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">{content.title}</h2>
        <div className="mt-6 border-t-2 border-gray-200 pt-6">
          <dl>
            {content.questions.map(({ question, answer, link }, idx) => {
              return (
                <div
                  className={
                    idx
                      ? 'mt-8 border-t border-gray-200 pt-6 md:grid md:grid-cols-12 md:gap-8'
                      : 'md:grid md:grid-cols-12 md:gap-8'
                  }>
                  <dt className="text-base leading-6 font-medium text-gray-900 md:col-span-5">{question}</dt>
                  <dd className="mt-2 md:mt-0 md:col-span-7">
                    <p className="text-base leading-6 text-gray-700">
                      <ReactMarkdown source={answer} className="react-markdown" />
                    </p>
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-16">
        <h2 id="contributors" className="text-3xl leading-9 font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
          {contributors.title}
        </h2>
        <p className="text-gray-700 mt-2">{contributors.subtitle}</p>
        <div className="mt-4 border-t-2 border-gray-200 pt-6">
          <ul>
            {contentContributors.contributors.map((value, idx) => {
              return (
                <li className="mt-2">
                  <ReactMarkdown source={value} className="react-markdown" />
                </li>
              );
            })}
            <li className="mt-2">
              <ReactMarkdown source={contributors.signup} className="react-markdown" />
            </li>
          </ul>
          <p className="mt-6 font-medium">{contributors.services.prefix}</p>
          <ul>
            {contributors.services.list.map((value, idx) => {
              return (
                <li className="mt-2">
                  <ReactMarkdown source={value} className="react-markdown" />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </PageLayout>
  );
}
